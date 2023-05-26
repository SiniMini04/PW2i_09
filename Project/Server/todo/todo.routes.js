import {Router} from 'express';
import { getTodos, createTodo, updateTodo, abfrage, getFor, getJaNein, getguelungueleer, getGemHoech, AbstNachJahr } from './todo.controller.js';

const r = Router();
r.get('/getGemHoech/', getGemHoech)
r.get('/:diagram', abfrage)
r.get('/AbstNachJahr', AbstNachJahr)
r.get('/', getTodos);
r.put('/', createTodo);
r.post('/:id', updateTodo);
r.get('/tt/:abstimung', getFor)
r.get('/janein/:abst', getJaNein)
r.get('/getguelungueleer/:abst', getguelungueleer)




// -- Kreisdiagram über ganzen Kanton (allgemein)
/*
- Ja nein 
- 
*/

// -- 



export { r }