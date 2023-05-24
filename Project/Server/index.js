import express from 'express';
import {r as todoRouter } from './todo/todo.routes.js';

const app = express();
app.use(express.json());
//Use Routes 

app.use('/api/todos', todoRouter)




app.get('api/pie', (request, response) => {
  response.send('Hello World');
});



app.listen(3030, () => {
  console.log('Server listens to http://localhost:3030');
});