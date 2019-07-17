const textInput = document.getElementById("todo");
const form = document.getElementById("to_do_form");
const list = document.getElementById("container");


const display = function(text){
    const li =  document.createElement('li');
    li.textContent = text;
    list.appendChild(li); 
}


const add = function(e){
    e.preventDefault();
    display(form.to_do_input.value);
    form.to_do_input.value=""
}

form.addEventListener('submit',add)

