import {Router} from 'express';
import { getTodos, createTodo, updateTodo, abfrage } from './todo.controller.js';

const r = Router();

r.get('/:diagram', abfrage)
r.get('/', getTodos);
r.put('/', createTodo);
r.post('/:id', updateTodo);



export { r }