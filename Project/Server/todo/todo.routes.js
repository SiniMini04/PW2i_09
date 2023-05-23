import {Router} from 'express';
import { getTodos, createTodo, updateTodo } from './todo.controller.js';

const r = Router();

r.get('/', getTodos);
r.put('/', createTodo);
r.post('/:id', updateTodo);

export { r }