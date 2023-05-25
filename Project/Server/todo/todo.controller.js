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
        case "tooltip":

            /*
            - Name
            - Stimberechtigte
            - Eingelegte Stimmen
            - Leere Stimmen
            - Ungültige Stimmen
            - Gültig Stimmen
            - Ja
            - nein
            - Stimmbeteiligung

            "datum_abstimmung": "2004-05-16",
        "vorlage_bezeichnung": "Gesetz zum Vollzug der Bundesgesetzgebung \u00fcber den Erwerb von Grundst\u00fccken durch Personen im Ausland",
        "vorlageart_code": 4,
        "vorlageart_bezeichnung": "Fakultatives Referendum",
        "bezirk_nr": "2005",
        "bezirk_name": "Kreuzlingen",
        "bfs_nr_gemeinde": "4651",
        "gemeinde_name": "Gottlieben",
        "stimmberechtigte": 175,
        "eingelegte_stimmzettel": 91,
        "leere_stimmen": 3,
        "ungueltige_stimmen": 1,
        "gueltige_stimmen": 87,
        "ja_stimmen": 40,
        "nein_stimmen": 47,
        "stimmbeteiligung": 52.0,
        "url_abstimmungsvorlage": null
            */
            const todos = await getAll();
            let data2 = []
            
            for(let i = 0; i < todos.length; i++){
                let name = todos[i].gemeinde_name;
                let stimmberechtigte = todos[i].stimmberechtigte;
                let eingelegte_stimmzettel = todos[i].eingelegte_stimmzettel;
                let leere_stimmen = todos[i].leere_stimmen;
                let ungueltige_stimmen = todos[i].ungueltige_stimmen;
                let gueltige_stimmen = todos[i].gueltige_stimmen;
                let ja_stimmen = todos[i].ja_stimmen;
                let nein_stimmen = todos[i].nein_stimmen;
                let stimmbeteiligung = todos[i].stimmbeteiligung; //9

                let obj = {};
                
                obj = {
                    "name" : name,
                    "stimmberechtigte": stimmberechtigte,
                    "eingelegte_stimmzettel": eingelegte_stimmzettel,
                    "leere_stimmen" : leere_stimmen,
                    "ungueltige_stimmen" : ungueltige_stimmen,
                    "gueltige_stimmen" : gueltige_stimmen,
                    "ja_stimmen" : ja_stimmen,
                    "neinstimmen" : nein_stimmen,
                    "stimmbeteiligung" : stimmbeteiligung
                }
                data2.push(obj);


            }
            console.log(data2);
            res.send(data2);
           




            res.send('d2');
        break;
    }
}






export { getTodos, createTodo, updateTodo, abfrage };
