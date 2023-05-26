import "./App.css";
import SVG from "./svg.js";
import NAV from "./navbar.js";
import HEADER from "./header";
import Selects from "./selects";
import Diagramme from "./diagramme.js";
import { ReactComponent as SvgIcon } from "./assets/map-tg.svg";

function App() {
  return (
    <>
      <HEADER></HEADER>
      <div className="flex">
        <NAV></NAV>
        <SVG></SVG>
      </div>
      <div className="body">
        <Diagramme></Diagramme>
      </div>
    </>
  );
}

export default App;
