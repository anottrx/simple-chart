import React, { useRef, useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import styled from "@emotion/styled";
import { Container, Card, CardHeader, CardContent } from "@mui/material";
import FooterButtons from "../components/FooterButtons";
import { ResultData, RESULT_DATA } from "../data/resultData";
import { COLOR_CHART_DATA } from "../data/chartColorData";
import styles from "./Chart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function makeChart(id: number) {
  const doughnut_data = {
    labels: makeArray(id),
    datasets: [
      {
        label: "# of Votes",
        data: makeArray2(id),
        backgroundColor: COLOR_CHART_DATA.map((x) => x.backgroundColor),
        borderColor: COLOR_CHART_DATA.map((x) => x.borderColor),
        borderWidth: 0,
      },
    ],
  };
  return doughnut_data;
}

function makeArray(id: number) {
  const answerList = RESULT_DATA[id - 1].result.map((x) => x.answer);
  return answerList;
}

function makeArray2(id: number) {
  const dataList = RESULT_DATA[id - 1].result.map((x) => x.data);
  return dataList;
}

const StatisticPage: React.FC = () => {
  const [data, setData] = useState<ResultData[] | null>(null);

  const chartRef = useRef<any>();

  useEffect(() => {
    fetch("/result")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.errorMessage) {
          throw new Error(json.errorMessage);
        }
        setData(json.RESULT_DATA);
      })
      .catch((error) => {
        alert(`Something Wrong: ${error}`);
      });
  }, []);

  return (
    <div className={styles.background}>
      <h1>통계</h1>
      {data && (
        <div className={styles.container}>
          {data.map((data) =>
            data.id === 2 || data.id === 6 ? (
              <CardChart variant="outlined" className={styles.card_chart}>
                <h4 className={styles.card_question}>{data.question}</h4>
                <CardContentChart className={styles.card_content}>
                  <Pie key={data.id} data={makeChart(data.id)} ref={chartRef} />
                </CardContentChart>
              </CardChart>
            ) : (
              <CardChart variant="outlined" className={styles.card_chart}>
                <h4 className={styles.card_question}>{data.question}</h4>
                <Doughnut
                  key={data.id}
                  data={makeChart(data.id)}
                  ref={chartRef}
                />
              </CardChart>
            )
          )}
        </div>
      )}
      <FooterButtons />
    </div>
  );
};

export default StatisticPage;

const CardChart = styled(Card)`
  background-color: #0f0e1e;
`;

const CardContentChart = styled(CardContent)`
  padding: 24px 0px 24px 40px;
`;
