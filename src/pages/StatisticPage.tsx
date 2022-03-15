import React, { useRef, useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import styled from "@emotion/styled";
import { Container, Card, CardHeader, CardContent } from "@mui/material";
import FooterButtons from "../components/FooterButtons";
import { StatisticData } from "../types/chartTypes";
import { STATISTIC_DATA } from "../mocks/database/chart";
// import { ResultData, RESULT_DATA } from "../data/resultData";
import { COLOR_CHART_DATA } from "../data/chartColorData";
import styles from "./Chart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const doughnut_question = [2, 4, 5, 6];

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
  const answerList = STATISTIC_DATA[id - 1].options.map((x) => x.optionDescription);
  return answerList;
}

function makeArray2(id: number) {
  const dataList = STATISTIC_DATA[id - 1].options.map((x) => x.optionCount);
  return dataList;
}

const StatisticPage: React.FC = () => {
  const [data, setData] = useState<StatisticData[] | null>(null);

  const chartRef = useRef<any>();

  useEffect(() => {
    fetch("/statistics")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.errorMessage) {
          throw new Error(json.errorMessage);
        }
        setData(json.STATISTIC_DATA);
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
            !doughnut_question.includes(data.id) ? (
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
