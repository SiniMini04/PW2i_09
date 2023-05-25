import React from "react";
import "./diagramm.css";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Pie, Bar } from "react-chartjs-2";

function Diagramme() {
  chartjs.register(ArcElement, Tooltip, Legend);

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
        data: [12, 19, 3, 5, 2, 3, 19, 3, 5, 2],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

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
