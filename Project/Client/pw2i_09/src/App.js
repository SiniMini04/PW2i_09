import "./App.css";
import SVG from "./svg.js";
import NAV from "./navbar.js";
import HEADER from "./header";
import Diagramme from "./diagramme.js";

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
