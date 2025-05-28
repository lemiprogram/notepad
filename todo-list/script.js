const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('my-todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let itemCount = 0
function newTodo() {
  itemCount += 1
  let uncheckedCount= 0
  listArr = document.getElementsByClassName("list-item")
  let li = document.createElement("li")
  li.innerHTML += `
  
      <div class="check-inp">
        <input type="checkbox" onchange = "checkingFunc(this)" class="${classNames.TODO_CHECKBOX}" name="checkbox">
        <input type="text" class="edit-inp" placeholder="Change the TODO item." hidden >
        <label for="demoCheckbox" class="${classNames.TODO_TEXT}">New list item</label>
      </div>
      <div class="list-btns flex">
        <button class="btn edit-btn" onclick="edit(this)">Edit</button>
        <button class="btn cancel-btn" onclick="cancel(this)" hidden>Cancel</button>
        <button class="btn save-btn" onclick="save(this)" hidden>Save</button>
        <button class="btn delete-btn" onclick="deleteItem(this)" >Delete</button>
      </div>
  
  `
  list.appendChild(li)
  itemCountSpan.textContent = itemCount
  const checkboxes = document.querySelectorAll(`.${classNames.TODO_CHECKBOX}`)
  console.log(checkboxes)
  checkboxes.forEach(box=>{
    
    if(!box.checked){
      uncheckedCount+=1
    }
  })
  uncheckedCountSpan.textContent = uncheckedCount
}
function deleteItem(btn){

    let li = btn.parentElement.parentElement
    let checkbox = li.querySelector(`.check-inp .${classNames.TODO_CHECKBOX}`)
    let listArr = li.parentElement.querySelectorAll("li")
    li.remove()
    itemCount = listArr.length -1
    itemCountSpan.textContent = itemCount
    if(!checkbox.checked){
      checkbox.checked = true
      checkingFunc(checkbox)
    }



}
function checkingFunc(box){
  let  uncheckedCount = parseInt(uncheckedCountSpan.textContent)
    if(box.checked){
        uncheckedCount -= 1
    }
    else{
      uncheckedCount += 1
    }
    uncheckedCountSpan.textContent = uncheckedCount 
  }
  

function edit(btn){
  const listItems = listItemsFunc(btn)
  listItems.forEach(item=>{
    if(item.hidden){
      item.hidden = false
    }
    else{
      item.hidden = true
    }
  })
}
function save(btn){
  const listItems = listItemsFunc(btn)
  const label = btn.parentElement.parentElement.querySelector(".check-inp label")
  const inp = btn.parentElement.parentElement.querySelector(".check-inp .edit-inp")
  if(inp.value === ""){
    return alert("Please type in something  or cancel")
  }
  label.textContent = inp.value
  listItems.forEach(item=>{
    if(item.hidden){
      item.hidden = false
    }
    else{
      item.hidden = true
    }
  })
  
}
function cancel(btn){
  const listItems = listItemsFunc(btn)
  listItems.forEach(item=>{
    if(item.hidden){
      item.hidden = false
    }
    else{
      item.hidden = true
    }
  })
}
function storage(){
  
}

function listItemsFunc(btn){
  const label = btn.parentElement.parentElement.querySelector(".check-inp label")
  const inp = btn.parentElement.parentElement.querySelector(".check-inp .edit-inp")
  const saveBtn = btn.parentElement.querySelector(" .save-btn")
  const editBtn = btn.parentElement.querySelector(" .edit-btn")
  const deleteBtn = btn.parentElement.querySelector(" .delete-btn")
  const cancelBtn = btn.parentElement.querySelector(" .cancel-btn")
  return [label,inp,saveBtn,editBtn,deleteBtn,cancelBtn]
}