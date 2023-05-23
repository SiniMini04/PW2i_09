import {getAll, create, update} from './todo.model.js';



async function getTodos(request, response){
    const todos = await getAll();
    response.json(todos);           //Warum wird der return in das attribut return geschrieben?
}

async function createTodo(request, response){
    const todo = await create(request.body);
    response.json(todo);
}

async function updateTodo(request, response){
    await update(request.params.id, request.body).then((todo) => { response.json(todo); }).catch((error) => { response.status(404).json({ message: error });});
}



export { getTodos, createTodo, updateTodo };
