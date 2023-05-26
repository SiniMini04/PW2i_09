import { response } from "express";
import { getAll, create, update } from "./todo.model.js";

let globTodo = null;

async function getTodos(request, response) {
  if (globTodo != null) {
    response.json(globTodo);
  } else {
    const todos = await getAll();
    globTodo = todos;
    response.json(todos);
  }
}

async function createTodo(request, response) {
  const todo = await create(request.body);
  response.json(todo);
}

async function updateTodo(request, response) {
  await update(request.params.id, request.body)
    .then((todo) => {
      response.json(todo);
    })
    .catch((error) => {
      response.status(404).json({ message: error });
    });
}

async function getFor(req, res) {
  //Gibt alles zurück was irgend wo den param enthält.
  const abst = req.params.abstimung;

  let to = await getAll();
  let newTo = [];
  for (let i = 0; i < to.length; i++) {
    if (Object.values(to[i]).includes(abst)) {
      console.log("Gefunden");
      newTo.push(to[i]);
    }
  }
  console.log(to);
  console.log(abst);
  res.send(newTo);
}

async function getGemHoech(req, res) {
  let te = await getAll();
  let hoechst = [];

  for (let i = 0; i < te.length; i++) {
    te.sort((a, b) => {
      return b.stimmbeteiligung - a.stimmbeteiligung;
    });
  }
  for (let i = 0; i < te.length; i++) {
    hoechst.push(te[i].stimmbeteiligung);
  }
  let highest10 = [];
  for (let i = 0; i < 10; i++) {
    highest10.push(hoechst[i]);
  }

  console.log(hoechst);
  res.send(highest10);
}

async function getJaNein(req, res) {
  let par = req.params.abst;

  let to = await getAll();
  let newTo = [];

  for (let i = 0; i < to.length; i++) {
    if (Object.values(to[i]).includes(par)) {
      console.log("Gefunden");
      newTo.push(to[i]);
    }
  }

  console.log(newTo);
  let obj = {
    ja_stimmen: 0,
    nein_stimmen: 0,
  };

  for (let a = 0; a < newTo.length; a++) {
    let ja_stimmen = newTo[a].ja_stimmen;
    let nein_stimmen = newTo[a].nein_stimmen;

    obj.ja_stimmen += ja_stimmen;
    obj.nein_stimmen += nein_stimmen;
  }
  console.log(newTo);
  res.send(obj);
}
async function getguelungueleer(req, res) {
  let par = req.params.abst;

  let to = await getAll();
  let newTo = [];

  for (let i = 0; i < to.length; i++) {
    if (Object.values(to[i]).includes(par)) {
      console.log("Gefunden");
      newTo.push(to[i]);
    }
  }

  console.log(newTo);
  let obj = {
    gueltige_stimmen: 0,
    ungueltige_stimmen: 0,
    leere_stimmen: 0,
  };

  for (let a = 0; a < newTo.length; a++) {
    let gueltige_stimmen = newTo[a].gueltige_stimmen;
    let ungueltige_stimmen = newTo[a].ungueltige_stimmen;
    let leere_stimmen = newTo[a].leere_stimmen;

    obj.gueltige_stimmen += gueltige_stimmen;
    obj.ungueltige_stimmen += ungueltige_stimmen;
    obj.leere_stimmen += leere_stimmen;
  }
  console.log(newTo);
  res.send(obj);
}

async function abfrage(req, res) {
  let par = req.params.diagram;
  switch (par) {
    case "abstim":
      const todo = await getAll();
      const data = [];
      console.log(todo.length);
      for (let i = 0; i < todo.length; i++) {
        let item = todo[i].vorlage_bezeichnung;
        if (!data.includes(item)) {
          data.push(item);
        }
      }

      console.log(data);
      res.json({ art: data });

      break;
    case "tooltip":
      const todos = await getAll();
      let data2 = [];

      for (let i = 0; i < todos.length; i++) {
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
          name: name,
          stimmberechtigte: stimmberechtigte,
          eingelegte_stimmzettel: eingelegte_stimmzettel,
          leere_stimmen: leere_stimmen,
          ungueltige_stimmen: ungueltige_stimmen,
          gueltige_stimmen: gueltige_stimmen,
          ja_stimmen: ja_stimmen,
          neinstimmen: nein_stimmen,
          stimmbeteiligung: stimmbeteiligung,
        };
        data2.push(obj);

        //case "dia1":

        /*
                - Ja nein im kanton

                - Diagramm wahl zwischen 
                - gemeinde namen
                - Wahlbeteiligung
                - 

                Kreisdiagram
                - leere s
                - ungültig
                - gültig
                    */

        //break;
      }
      console.log(data2);
      res.send(data2);

      res.send("d2");
      break;

    case "dia1":
      break;
  }
}

export {
  getTodos,
  createTodo,
  updateTodo,
  abfrage,
  getFor,
  getJaNein,
  getguelungueleer,
  getGemHoech,
};
