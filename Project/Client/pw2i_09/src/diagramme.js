import React from "react";
import "./diagramm.css";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Pie, Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";

function Diagramme(props) {
  chartjs.register(ArcElement, Tooltip, Legend);
  console.log(props.abstimmung);

  useEffect(() => {
    console.log(props.abstimmung);
    let abstimmung = props.abstimmung;
    abstimmung = encodeURIComponent(abstimmung);
    console.log(abstimmung);
    /*
    let data = axios
      .get("https://localhost:3030/api/todos/janein/" + abstimmung)
      .then((response) => {
        console.log(response);
      });
    console.log(data);*/
  }, [props.abstimmung]);

  const JANein = {
    labels: ["JA", "Nein"],
    datasets: [
      {
        label: "JA/Nein Stimmen",
        data: [300, 50],
        backgroundColor: ["green", "red"],
        borderColor: ["white", "white"],
        borderWidth: 1,
      },
    ],
  };

  const Stimmen = {
    labels: ["Gültige Stimmen", "Ungültige Stimmen", "Leere Stimmzettel"],
    datasets: [
      {
        label: "Stimmverhältnis",
        data: [1, 2, 3],
        backgroundColor: ["green", "red", "yellow"],
        borderColor: ["white", "white", "white"],
        borderWidth: 1,
      },
    ],
  };
  const Stimmbeteiligung = {
    labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    datasets: [
      {
        label: "Stimmbeteiligung",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };
  useEffect(() => {
    return () => {
      let daten = [];
      getGemHoech().then((res) => {
        daten = res;

        for (let i = 0; i < daten.length; i++) {
          Stimmbeteiligung.datasets.data = 0;
        }
        console.log("Daten sind ", daten);
      });
    };
  }, []);

  const optionspie = {
    responsive: true,
  };

  const optionsbar = {
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <>
      <div className="diagramm">
        <h2>Statistik:</h2>
        <div id="chart-wrapper">
          <div className="chart">
            <Pie data={JANein} options={optionspie} />
          </div>
          <div className="chart">
            <Pie data={Stimmen} options={optionspie} />
          </div>
        </div>
        <div id="line-wrapper">
          <div className="chart">
            <Bar data={Stimmbeteiligung} options={optionsbar} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Diagramme;
