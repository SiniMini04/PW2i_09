import "./App.css";
import Svg from "./svg.js";
import Nav from "./navbar.js";
import NAV from "./navbar.js";
import Selects from "./selects";
import Diagramme from "./diagramme";
import axios from 'axios';
import {useEffect} from "react";


function App() {

    async function getAllData() {
        let data = await axios.get('http://localhost:3030/api/todos');
        console.log(data)

    }

    // useEffect(getAllData, []);


    return (<>
        <div>
            <h1 className="">Titel</h1>
            <Svg></Svg>
            <Diagramme></Diagramme>
        </div>
    </>);
} // <Selects pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />export default App;
export default App;
