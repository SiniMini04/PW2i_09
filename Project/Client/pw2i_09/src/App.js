import "./App.css";
import SVG from "./svg.js";
import NAV from "./navbar.js";
import Selects from "./selects";
import Diagramme from "./diagramme.js";
import { ReactComponent as SvgIcon } from "./assets/map-tg.svg";

function App() {
  return (
    <>
      <h1 className="">Titel</h1>
      <div className="flex">
        <NAV></NAV>
        <SVG></SVG>
      </div>
      <Diagramme></Diagramme>
    </>
  );
}

export default App;
