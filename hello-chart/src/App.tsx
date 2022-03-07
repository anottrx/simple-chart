import React, { useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, getElementAtEvent } from "react-chartjs-2";
import {DOUGHNUT_COLOR} from "./data/doughnutColor"

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: DOUGHNUT_COLOR.map(position => position.labelName),
  datasets: [
    {
      label: "# of Votes",
      data: DOUGHNUT_COLOR.map(position => position.data),
      backgroundColor: DOUGHNUT_COLOR.map(position => position.backgroundColor),
      borderColor: DOUGHNUT_COLOR.map(position => position.borderColor),
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
