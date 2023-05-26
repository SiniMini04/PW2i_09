import { useEffect } from "react";
import "./navbar.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

async function getAbst() {
  const url = "http://localhost:3030/api/todos/abstim";
  let data = await axios.get(url).then((response) => response.data.art);
  console.log(data);
  return data;
}

function NAV(props) {
  useEffect(() => {
    return () => {
      const ul = document.querySelector("ul");
      let votinglist = [];
      getAbst().then((res) => {
        votinglist = res;

        console.log(votinglist);

        for (let i = 0; i < votinglist.length; i++) {
          const li = document.createElement("li");
          const link = document.createElement("a");
          li.appendChild(link);
          ul.appendChild(li);
          link.innerHTML = votinglist[i];
          link.addEventListener("click", () => {
            props.changeAbstimmung(votinglist[i]);
          });
        }
      });
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
