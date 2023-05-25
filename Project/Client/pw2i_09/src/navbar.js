import { useEffect } from "react";
import "./navbar.css";
import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';

async function getAbst(){
  const url = 'http://localhost:3030/api/todos/abstim';
  let votinglist = [];
  
  return await axios.get(url).then( (response) => response.data.art);     
}



function NAV(props) {
  

  const [basicOpen, setBasicOpen] = useState(true);
  const [basicCollapse1, setBasicCollapse1] = useState(true);
  const [basicCollapse2, setBasicCollapse2] = useState(false);
  //const [votinglist, changeVoting] = useState(null)

  //useEffect(getAbst().then(value=>changeVoting(value)), []);
  let votinglist = getAbst().then((response) => {
    console.log(response.data);
  });
  console.log("grrrr2", votinglist);
  //let votinglist = [1,1,2,3];

  votinglist = [1,2,3];
  

  //getvotinglist();

  useEffect(() => {
    return 
    () => {
      const ul = document.querySelector("ul");

      for (let i = 0; i < votinglist.length; i++) {
        const li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = votinglist[i];
      }
    };
  }, []);

  return (
    <>
      <nav>
        <ul></ul>
      </nav>
    </>
  );
}


export default NAV;
