import React from "react";
import { ReactComponent as TgIcon } from "./assets/thurgau-logo.svg";
import "./header.css";

function HEADER(props) {
  return (
    <>
      <div class="header-container">
        <h1>Abstimmungsergebnisse Kanton Thurgau</h1>
        <TgIcon id="tg-icon" />
      </div>
      <div class="tg-horizont"></div>
    </>
  );
}

export default HEADER;
