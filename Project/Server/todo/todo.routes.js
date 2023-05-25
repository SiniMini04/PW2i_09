import {Router} from 'express';
import { getTodos, createTodo, updateTodo, abfrage, getFor, getJaNein } from './todo.controller.js';

const r = Router();

r.get('/:diagram', abfrage)
r.get('/', getTodos);
r.put('/', createTodo);
r.post('/:id', updateTodo);
r.get('/tt/:abstimung', getFor)
r.get('/janein/:abst', getJaNein)



// -- Kreisdiagram über ganzen Kanton (allgemein)
/*
- Ja nein 
- 
*/

// -- 



export { r }