import "./App.css";
import SVG from "./svg.js";
import NAV from "./navbar.js";
import HEADER from "./header";
import Diagramme from "./diagramme.js";
import { useState } from "react";

function App() {
  const [abstimmung, changeAbstimmung] = useState(
    "Beschluss des Grossen Rates über die Gewährung eines Darlehens von 25.416 Mio. Franken als Anteil des Kantons Thurgau für den Neubau des Ostschweizer Kinderspitals (OKS) in St. Gallen"
  );
  console.log(abstimmung);
  return (
    <>
      <HEADER></HEADER>
      <div className="flex">
        <NAV changeAbstimmung={changeAbstimmung}></NAV>
        <SVG abstimmung={abstimmung}></SVG>
      </div>
      <div className="body">
        <Diagramme abstimmung={abstimmung}></Diagramme>
      </div>
    </>
  );
}

export default App;
