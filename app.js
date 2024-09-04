let todosZone = document.querySelector('.todosZone');
let form = document.querySelector('.inputField');
let textInput = document.querySelector('.textInput')
console.log(todosZone);






// Open the btn
document.getElementById('add btn').onclick = function() {
    document.getElementById('btn').style.display = "block";
}

// Close the btn when the user clicks on <span> (x)
document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('btn').style.display = "none";
}

// Close the btn when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == document.getElementById('btn')) {
        document.getElementById('btn').style.display = "none";
    }
}

// Function to handle adding a new todo
function addTodo() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const deadline = document.getElementById('deadline').value;
    console.log({ title, description, deadline });
}









function createTodoItem(contentFromInput){

    // san3an el div lekbira
    let todoItem = document.createElement('div');
    todoItem.classList.add('todoItem');


    // sna3na les elements li fel div
    let inputField = document.createElement('input');
    inputField.type = 'checkbox';
    inputField.classList.add('checkbox');
    let content = document.createElement('p');
    content.className = 'content';
    content.textContent = contentFromInput;
    let deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('deleteButton');

    todoItem.appendChild(inputField);
    todoItem.appendChild(content);
    todoItem.appendChild(deleteButton);

    return todoItem;
    

}


form.addEventListener("submit",function(event){

    event.preventDefault();
    let content = title;
    let todoItem = createTodoItem(content)
    todosZone.appendChild(todoItem);
    textInput.value = '';

    let deletebutton = todoItem.querySelector('.deleteButton');
    let checkbox = todoItem.querySelector('.checkbox');
    let contentText = todoItem.querySelector('.content');


    deletebutton.addEventListener('click',function(){
        todosZone.removeChild(todoItem);
        
    })



    checkbox.addEventListener('change',function(){
        if(checkbox.checked){
        
            contentText.style.textDecoration = 'line-through';
        }
        else {
            console.log('unchecked');
            contentText.style.textDecoration = 'none';
        }
    })

})
