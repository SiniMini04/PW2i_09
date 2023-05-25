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
<<<<<<< HEAD
    <div>
    <h1 className="">Titel</h1>
    <NAV></NAV>
    <SVG></SVG>
    <Diagramme></Diagramme>
    </div>
=======
      <HEADER></HEADER>
      <div className="flex">
        <NAV></NAV>
        <SVG></SVG>
      </div>
      <div className="body">
        <Diagramme></Diagramme>
      </div>
>>>>>>> cc74974ebb7938ece8c94be47873e68d884f807f
    </>
  );
}

export default App;
