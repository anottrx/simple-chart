import React, { useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, getElementAtEvent } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"],
      borderColor: ["red", "blue", "yellow", "green", "purple", "orange"],
      borderWidth: 1,
    },
  ],
};

export function App() {
const chartRef: any = useRef(null);

const onClick=(event: React.MouseEvent<HTMLCanvasElement, MouseEvent>)=> {
  alert(data.labels[getElementAtEvent((chartRef.current), event)[0].index])
}

  return <Doughnut data={data} ref={chartRef} onClick={onClick} />;
}
