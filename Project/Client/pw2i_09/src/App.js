import "./App.css";
import SVG from "./svg.js";
import NAV from "./navbar.js";
import Selects from "./selects";
import Diagramme from "./diagramme";


function App() {
  return (
    <>
    <div>
    <h1 className="">Titel</h1>
    <NAV></NAV>
    <SVG></SVG>
    <Diagramme></Diagramme>
    </div>
    </>
  );
}
// <Selects pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
export default App;
