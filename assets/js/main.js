let cont = 1;
const Task = [];

function mostrarListaTarea(Task){

    let listaHTML = "";

Task.forEach(lista => {
    listaHTML += `<div class="d-flex">
                    <p class="col-3">${lista.id}</p>
                    <p class="col-3">${lista.tarea}</p>
                    <input class="col-3 me-3" type="checkbox" onclick="listasListas()">
                    <i class="bi bi-trash" onclick="DeleteTask(${lista.id})"></i>
                    </div>
                `; 
});



document.getElementById("listaTareas").innerHTML = listaHTML;

const total = document.querySelector("#Total");
total.innerHTML =  Task.length;

}

function DeleteTask(id){
    const index = Task.findIndex(lista => lista.id === id)
    Task.splice(index,1);
    mostrarListaTarea(Task);
}

function AgregarTarea(){
    const inputTarea = document.querySelector("#inputTask").value;
    newTask = {id: cont, tarea: inputTarea}
    Task.push(newTask);
    cont++;
    
    mostrarListaTarea(Task);
}

let contOk = 0;
const realizadas = document.querySelector("#Realizadas");


function listasListas(){
 let selectCheckboxs = document.querySelectorAll('input[type="checkbox"]:checked').length;
    realizadas.innerHTML = selectCheckboxs;
}



