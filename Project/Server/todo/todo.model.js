import axios from 'axios';
//import fs from fs;


//Diese funktion sollte mit axios das json herunterladen
async function downloadJson(){
    
}


async function downloadDatafromApi(){
    
   return (await axios.get('https://data.tg.ch/api/v2/catalog/datasets/sk-stat-52/exports/json')).data;
}

const todos = downloadDatafromApi(); //Ist asyncron



//Json wird als objekt abgespeichert!
/*function fileToObj(filename){
    fs.readFile(filename, 'utf-8', (e, jsonStr) => {
        if(e) {
            console.log('Fehler beim Auslesen des Json <<Data.js>> dokuments!!!');
            return 0;
        }//else
        try{
            const jsonObj = JSON.parse(jsonStr);
            console.log('JSPbj' + jsonObj);

        }catch(e){console.log("String konnte nicht in jsonObjekt umgewandelt werden!")};
    })
    return jsonObj;
}*/

//const todos = fileToObj('data.json');

/*
const todos = [
    {
      id: '1',
      description: 'JavaScript Projekt fertigstellen',
      isDone: true,
    },
    {
      id: '2',
      description: 'Ferien machen und relaxen',
      isDone: false,
    },
    {
      id: '3',
      description: 'Node.js - Das umfassende Handbuch lesen',
      isDone: false,
    },
  ];

  */
  
  function getAll() {
    return Promise.resolve(todos);
  }
  
  function create(todo) {
    const newTodo = {
      id: getNextId(),
      description: todo.description,
      isDone: todo.isDone,
    };
    todos.push(newTodo);
    return Promise.resolve(newTodo);
  }
  
  function getNextId() {
    if (!todos || todos.length === 0) {
      return '1';
    }
    return '' + (parseInt(todos[todos.length - 1].id) + 1);
  }
  
  function update(id, todo) {
    const existingTodo = findTodo(id);
    if (existingTodo) {
      existingTodo.description = todo.description;
      existingTodo.isDone = todo.isDone;
      return Promise.resolve(existingTodo);
    }
    return Promise.reject(`Failed to find todo with id ${id}`);
  }
  
  function findTodo(id) {
    const existingTodos = todos.filter((todo) => todo.id === id);
    if (existingTodos && existingTodos.length === 1) {
      return existingTodos[0];
    }
    return null;
  }
  
  export { getAll, create, update };