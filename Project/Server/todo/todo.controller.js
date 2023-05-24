import { response } from 'express';
import {getAll, create, update} from './todo.model.js';

let globTodo = null;

async function getTodos(request, response){
    if(globTodo != null){
        response.json(globTodo);
    }else{
        const todos = await getAll();
        globTodo = todos;
        response.json(todos); 
    }
              //Warum wird der return in das attribut return geschrieben?
}

async function createTodo(request, response){
    const todo = await create(request.body);
    response.json(todo);
}

async function updateTodo(request, response){
    await update(request.params.id, request.body).then((todo) => { response.json(todo); }).catch((error) => { response.status(404).json({ message: error });});
}

async function abfrage(req, res) {
    let par = req.params.diagram;
    switch(par){
        case "abstim":
            const todo = await getAll();
            const data = [];
            console.log(todo.length);
            for(let i = 0; i < todo.length; i++) {

                
                
                let item = todo[i].vorlageart_bezeichnung;
                if(!data.includes(item)){
                    data.push(item);
                }
                
            }

                    
                
            
            
            
            console.log(data);
            res.json({art: data});
            
            break;
        case "d2":
            res.send('d2');
        break;
    }
}






export { getTodos, createTodo, updateTodo, abfrage };
