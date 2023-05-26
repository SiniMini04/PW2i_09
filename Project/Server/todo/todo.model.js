import axios from "axios";
//import fs from fs;

//Diese funktion sollte mit axios das json herunterladen
async function downloadJson() {}

async function downloadDatafromApi() {
  let daeten = (
    await axios.get(
      "https://data.tg.ch/api/v2/catalog/datasets/sk-stat-52/exports/json"
    )
  ).data;

  console.log(daeten);
  for (let i = 0; i < daeten.length; i++) {
    daeten[i].vorlage_bezeichnung.replaceAll("\u2019", ""); //\u00fc
    daeten[i].vorlage_bezeichnung.replaceAll("\u00fc", "");
    console.log(daeten[i].vorlage_bezeichnung);
  }
  return daeten;
}

const todos = downloadDatafromApi(); //Ist asyncron

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
    return "1";
  }
  return "" + (parseInt(todos[todos.length - 1].id) + 1);
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
