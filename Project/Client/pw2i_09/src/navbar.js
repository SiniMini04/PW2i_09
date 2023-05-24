import { useEffect } from "react";
import "./navbar.css";
import React from "react";
import { useState } from "react";
import {
  MDBIcon,
  MDBBtn,
  MDBSideNav,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBSideNavMenu,
  MDBSideNavCollapse,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.css";

function NAV(props) {
  const [basicOpen, setBasicOpen] = useState(true);
  const [basicCollapse1, setBasicCollapse1] = useState(true);
  const [basicCollapse2, setBasicCollapse2] = useState(false);

  const votinglist = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //getvotinglist();

  useEffect(() => {
    return () => {
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

function getvotinglist() {}

export default NAV;
