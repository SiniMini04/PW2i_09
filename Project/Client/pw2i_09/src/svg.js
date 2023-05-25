import React from "react";
import { useEffect } from "react";
import { ReactComponent as SvgIcon } from "./assets/map-tg.svg";
import "./svg.css";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

//
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

function SVG(props) {
  useEffect(() => {
    return () => {
      let doc = document.querySelectorAll("#municipalities path"); //path
      console.log("doc");
      for (let i = 0; i < doc.length; i++) {
        doc[i].addEventListener("mouseover", onHover);
        doc[i].addEventListener("mouseout", notonHover);
        console.log("EL added");
      }
    };
  }, []);

  function onHover(targ) {
    const obj = targ.currentTarget;
    console.log(obj.id + " <-Wurde gehovert!");
    renderTooltips(obj.id);
  }
  function notonHover(targ) {
    const elTooltip = document.getElementById("tooltip-map");
    elTooltip.classList.add("do-not-display");
  }

  function renderTooltips(id) {
    const elTooltip = document.getElementById("tooltip-map");
    elTooltip.classList.remove("do-not-display");
    elTooltip.innerHTML =
      id +
      "<table class='tooltip-table'>" +
      "<tr>" +
      "<td><span class='tooltip-label'>Stimmberechtigte:</span></td>" +
      "<td><span class='tooltip-value'>0</span></td>" +
      "</tr>" +
      "<tr>" +
      "<td><span class='tooltip-label'>Eingelegte Stimmzettel:</span></td>" +
      "<td><span class='tooltip-value'>0</span></td>" +
      "</tr>" +
      "<tr>" +
      "<td><span class='tooltip-label'>Leere Stimmen:</span></td>" +
      "<td><span class='tooltip-value'>10000</span></td>" +
      "</tr>" +
      "<tr>" +
      "<td><span class='tooltip-label'>Ungültige Stimmen:</span></td>" +
      "<td><span class='tooltip-value'>0</span></td>" +
      "</tr>" +
      "<tr>" +
      "<td><span class='tooltip-label'>Gültige Stimmen:</span></td>" +
      "<td><span class='tooltip-value'>0</span></td>" +
      "</tr>" +
      "<tr>" +
      "<td><span class='tooltip-label'>JA:</span></td>" +
      "<td><span class='tooltip-value'>0</span></td>" +
      "</tr>" +
      "<tr>" +
      "<td><span class='tooltip-label'>Nein:</span></td>" +
      "<td><span class='tooltip-value'>0</span></td>" +
      "</tr>" +
      "<tr>" +
      "<td><span class='tooltip-label'>Stimmbeteiligung:</span></td>" +
      "<td><span class='tooltip-value'>0</span></td>" +
      "</tr>" +
      "</table>";

    elTooltip.style.top = `${event.pageY}px`;
    elTooltip.style.left = `${event.pageX}px`;
  }

  return (
    <>
      <SvgIcon />
      <p id="tooltip-map" class="do-not-display"></p>
    </>
  );
}

export default SVG;
