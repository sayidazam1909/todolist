const todoForm = document.querySelector(".form");
const todoInput = document.querySelector(".input");
const todoList = document.querySelector(".list");


todoForm.addEventListener("submit" , function(evt) {
    evt.preventDefault();
    
    const inputValue = todoInput.value;
    
    const newItem  = document.createElement("li");
    const userName  = document.createElement("h2");
    const checkBox  = document.createElement("input");
    const todoEdit  = document.createElement("button");
    const todoDelete  = document.createElement("button");
    const wrapper = document.createElement("div")
    
    newItem.className = "item"
    
    
    todoDelete.className = "delete";
    todoEdit.className = "edit";
    checkBox.className = "chekc"
    wrapper.append(todoDelete,todoEdit)
    checkBox.type = "checkbox";
    todoDelete.textContent = "delete";
    todoEdit.textContent = "edit";
    userName.className = "user"
    
    userName.textContent = inputValue;
    
    newItem.append(checkBox,userName,wrapper)
    
    
    todoList.appendChild(newItem)
    
    todoDelete.addEventListener("click" , () =>{
        todoList.removeChild(newItem)
    })
  
    
    todoInput.value = ""
    
    todoEdit.addEventListener("click", function() {
        const newText = prompt("Enter new text");
        userName.textContent = newText;
    })
     
    checkBox.addEventListener("click", () =>{
        if(checkBox.checked) {
            newItem.style.textDecoration = "line-through";
        } else {
            newItem.style.textDecoration = "none";
        }
    })
})
