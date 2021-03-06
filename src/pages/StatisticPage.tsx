import React, { useRef, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  // ChartOptions,
  ChartData,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import styled from "@emotion/styled";
import { Container, Card, CardHeader, CardContent, Grid } from "@mui/material";
import FooterButtons from "../components/FooterButtons";
import { StatisticData } from "../types/chartTypes";
import { STATISTIC_DATA } from "../mocks/database/chart";
import { COLOR_CHART_DATA } from "../data/chartColorData";
import styles from "./Chart.module.css";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

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
  const answerList = STATISTIC_DATA[id - 1].options
    .sort((a, b) => (a.rank > b.rank ? 1 : b.rank > a.rank ? -1 : 0))
    .map((x) => x.optionDescription);
  return answerList;
}

function makeArray2(id: number) {
  // 원래는 도넛용인데 현재 바형태까지 사용중
  const dataList = STATISTIC_DATA[id - 1].options
    .sort((a, b) => (a.rank > b.rank ? 1 : b.rank > a.rank ? -1 : 0))
    .map((x) => Math.floor(Number(x.optionCount / 90) * 100));
  return dataList;
}

function makeBarChart(id: number): ChartData<"bar", number[], unknown> {
  const stateTemp = {
    labels: makeArray(id),
    datasets: [
      {
        label: "응답자 전체",
        backgroundColor: COLOR_CHART_DATA[3].backgroundColor,
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 0,
        data: makeArray2(id),
      },
    ],
  };
  return stateTemp;
  // throw new Error("Function not implemented.");
}

const StatisticPage: React.FC = () => {
  const [data, setData] = useState<StatisticData[] | null>(null);

  const chartRef = useRef<any>();

  const optionsTemp: any = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
      // title: {
      //   display: true,
      //   text: "Average Rainfall per month",
      //   fontSize: 20,
      // },
      // legend: {
      //   display: true,
      //   position: "right",
      // },
    },
  };

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
        <ChartContainer>
          {data.map((data) =>
            doughnut_question.includes(data.id) ? (
              <CardChart variant="outlined">
                <div className={styles.card_title_content}>
                  <h2 className={styles.card_question}>{data.question}</h2>
                  <CardContentChart className={styles.card_content}>
                    <Doughnut
                      key={data.id}
                      data={makeChart(data.id)}
                      options={{
                        plugins: {
                          datalabels: {
                            formatter: function (value, context) {
                              return (
                                value +
                                "%\n" +
                                context.chart.data.labels?.slice(
                                  context.dataIndex,
                                  context.dataIndex + 1
                                )
                              );
                            },
                            labels: {
                              value: {
                                font: {
                                  weight: "bold",
                                },
                              },
                            },
                          },
                        },
                      }}
                      // plugins={[ChartDataLabels]}
                      ref={chartRef}
                    />
                  </CardContentChart>
                </div>
              </CardChart>
            ) : (
              <CardChart variant="outlined">
                <div className={styles.card_title_content}>
                  <h2 className={styles.card_question}>{data.question}</h2>
                  <Bar options={optionsTemp} data={makeBarChart(data.id)} />
                </div>
              </CardChart>
            )
          )}
        </ChartContainer>
      )}
      <FooterButtons />
    </div>
  );
};

export default StatisticPage;

const ChartContainer = styled.div`
  display: flex;
  max-width: 900px;
  margin: 0;
  padding: 0;
  
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  /* @media screen and (max-width: 900px) {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #d63d3d;
  } */
  @media screen and (max-width: 767px) {
    display: inline-block;
    background-color: #121328;
    /* display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center; */
  }
  @media screen and (max-width: 575px) {
    display: inline-block;
    background-color: #121328;
    /* background-color: #515897; */
  }
`;

const CardChart = styled(Card)`
  display: flex;
  width: 47%;
  min-height: 400px;
  margin: 0;
  border: 0;
  background-color: #121328;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  /* @media screen and (max-width: 900px) {
    display: inline-block
    background-color: #d63d3d;
    align-items: center;
  } */
  @media screen and (max-width: 767px) {
    display: inline;
     background-color: #407a35;

    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; */
  
    /* width: 45%; */
    /* width: 100%; */
  }
  @media screen and (max-width: 575px) {
    display: inline;
    background-color: #121328;
  }
`;

const CardContentChart = styled(CardContent)`
  /* padding: 24px 0px 24px 40px; */
  padding: 0px;
`;
