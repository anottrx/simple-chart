import React, { useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, getElementAtEvent } from "react-chartjs-2";
import { DOUGHNUT_COLOR } from "../data/doughnutColor";

ChartJS.register(ArcElement, Tooltip, Legend);

export const learn_data = {
  labels: DOUGHNUT_COLOR.map((position) => position.labelName),
  datasets: [
    {
      label: "# of Votes",
      data: DOUGHNUT_COLOR.map((position) => position.data),
      backgroundColor: DOUGHNUT_COLOR.map(
        (position) => position.backgroundColor
      ),
      borderColor: DOUGHNUT_COLOR.map((position) => position.borderColor),
      borderWidth: 1,
    },
  ],
};

const LearnPage: React.FC = () => {
  const chartRef = useRef<any>();

  const onClick = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    alert(learn_data.labels[getElementAtEvent(chartRef.current, event)[0].index]);
  };

  return <Doughnut data={learn_data} ref={chartRef} onClick={onClick} />;
};

export default LearnPage;