document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form')
    form.addEventListener("submit", e => {
    e.preventDefault()
    buildToDo(e.target.new_task_description.value)
    form.reset()
  })

  // creating an element to add to the DOM 
function buildToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = "x"
  p.textContent = `${todo} `
  //console.log(p)
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

//handling a delete feature
function handleDelete(e){
  e.target.parentNode.remove()
}
});