import {Router} from 'express';
import { getTodos, createTodo, updateTodo, abfrage, getFor } from './todo.controller.js';

const r = Router();

r.get('/:diagram', abfrage)
r.get('/', getTodos);
r.put('/', createTodo);
r.post('/:id', updateTodo);
r.get('/tt/:abstimung', getFor)



export { r }