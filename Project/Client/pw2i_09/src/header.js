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
      <hr class="colorful-line"></hr>
    </>
  );
}

export default HEADER;
