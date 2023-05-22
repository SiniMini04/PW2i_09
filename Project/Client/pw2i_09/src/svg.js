import { useEffect } from "react";
import img from "./assets/map-tg.svg";
import "./svg.css";
import SVGInjection from "@iconfu/svg-inject";

function SVG(props) {
  useEffect(() => {
    SVGInject.setOptions({ makeIdsUnique: false });
    const elMapTg = document.getElementById("tg-map");
    SVGInject(elMapTg);
  });

  return (
    <>
      <img id="tg-map" src={img} />
    </>
  );
}

export default SVG;
