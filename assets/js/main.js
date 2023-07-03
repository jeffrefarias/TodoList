// const Task = [];

const Task = [
    {
      id: 1,
      tarea: "Hacer la cama"
    },
    {
      id: 2,
      tarea: "Ducharme"
    },
    {
        id: 3,
        tarea: "Tomar desayuno"
    }
  ];

let cont = Task.length +1;

document.addEventListener("DOMContentLoaded", function(){
    mostrarListaTarea(Task);
});

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

    if(inputTarea === ''){
        alert("No se pueden agregar tareas vacías.");
    }else{
        newTask = {id: cont, tarea: inputTarea}
        Task.push(newTask);
        cont++;
    
      mostrarListaTarea(Task);
    }

    
}

let contOk = 0;
const realizadas = document.querySelector("#Realizadas");


function listasListas(){
 let selectCheckboxs = document.querySelectorAll('input[type="checkbox"]:checked').length;
    realizadas.innerHTML = selectCheckboxs;
}



