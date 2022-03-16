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
  ChartOptions,
  ChartData,
} from "chart.js";
import { Doughnut, Pie, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import styled from "@emotion/styled";
import { Container, Card, CardHeader, CardContent } from "@mui/material";
import FooterButtons from "../components/FooterButtons";
import { StatisticData } from "../types/chartTypes";
import { STATISTIC_DATA } from "../mocks/database/chart";
// import { ResultData, RESULT_DATA } from "../data/resultData";
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

  const doughnutOptions = {
    // plugins: {
    datalabels: {
      // backgroundColor: function(context) {
      //   return context.dataset.backgroundColor;
      // },
      borderColor: "white",
      borderRadius: 25,
      borderWidth: 2,
      color: "white",
      display: true,
      // display: function(context) {
      //   var dataset = context.dataset;
      //   var count = dataset.data.length;
      //   var value = dataset.data[context.dataIndex];
      //   return value > count * 1.5;
      // },
      font: {
        weight: "bold",
      },
      padding: 6,
      // formatter: Math.round
    },
    // },
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labelsTemp = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  // const stateTemp = {
  //   labels: ["January", "February", "March", "April", "May"],
  //   datasets: [
  //     {
  //       label: "Rainfall",
  //       backgroundColor: "rgba(75,192,192,1)",
  //       borderColor: "rgba(0,0,0,1)",
  //       borderWidth: 2,
  //       data: [65, 59, 80, 81, 56],
  //     },
  //   ],
  // };

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

  const dataTemp = {
    labelsTemp,
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      // {
      //   label: "Dataset 2",
      //   data: labelsTemp.map(() =>
      //     STATISTIC_DATA[11].options.map((x) => x.optionCount)
      //   ),
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      // },
    ],
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
        <ChartContainer className={styles.container}>
          {data.map((data) =>
            doughnut_question.includes(data.id) ? (
              <CardChart variant="outlined" className={styles.card_chart}>
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
                      // options ={doughnutOptions}

                      // options={{
                      //   plugins: {
                      //     datalabels: {
                      //       // display: false,
                      //       color: "red",
                      //       font: {
                      //         size: 14,
                      //         weight: "bold",
                      //       },
                      //     },
                      //   },
                      // }}
                      // plugins={[ChartDataLabels]}
                      ref={chartRef}
                    />
                  </CardContentChart>
                </div>
              </CardChart>
            ) : (
              <CardChart variant="outlined" className={styles.card_chart}>
                <div className={styles.card_title_content}>
                  <h2 className={styles.card_question}>{data.question}</h2>
                  <Bar options={optionsTemp} data={makeBarChart(data.id)} />
                  {/* <Bar options={optionsTemp} data={stateTemp} /> */}
                  {/* <Bar
                  key={data.id}
                  data={makeBarChart(data.id)}
                  options={barOptions}
                /> */}
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
  flex-wrap: wrap;

  @media (max-width: 1022px) {
    display: inline;
    width: 100%;
  }
`;

const CardChart = styled(Card)`
  /* width: 48%; */
  /* flex: 1; */
  width: 47%;
  background-color: #0f0e1e;
  @media (max-width: 1022px) {
    width: 100%;
    /* flex: 0; */
    /* background-color: #ffffff; */
  }
`;

const CardContentChart = styled(CardContent)`
  padding: 24px 0px 24px 40px;
`;
