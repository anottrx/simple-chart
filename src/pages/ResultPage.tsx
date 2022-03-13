import React, { useRef, useState, useEffect } from "react";
import { AnswerObject, ResultData, RESULT_DATA } from "../data/resultData";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, getElementAtEvent } from "react-chartjs-2";
import styled from "@emotion/styled";
import { Container, Paper } from "@mui/material";
import FooterButtons from "../components/FooterButtons";

ChartJS.register(ArcElement, Tooltip, Legend);

const Item = (data: ResultData) => {
  return (
    <li>
      question: {data.question}
      result:{data.result}
    </li>
  );
};

function makeChart(id: number) {
  console.log(id);
  const doughnut_data = {
    labels: makeArray(id),
    datasets: [
      {
        label: "# of Votes",
        data: makeArray2(id),
        backgroundColor: ["yellow", "green", "blue"],
        borderColor: "blue",
        borderWidth: 2,
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

const ResultPage: React.FC = () => {
  const [data, setData] = useState<ResultData[] | null>(null);

  const chartRef = useRef<any>();

  // const onClick = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
  //   alert(data.labels[getElementAtEvent(chartRef.current, event)[0].index]);
  // };

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
    <div>
      <h1>통계</h1>
      {data && (
        <DataContainer>
          {data.map((data) => (
            <DataPaper elevation={1}>
              <h2>{data.question}</h2>
              <Doughnut
                key={data.id}
                data={makeChart(data.id)}
                ref={chartRef}
              />
            </DataPaper>
          ))}
        </DataContainer>
        // <ul>
        //   {data.map((data) => (
        //     <Item
        //       key={`${data.id}`}
        //       question={data.question}
        //       id={data.id} result={data.result}              // result={data.result}
        //     />
        //   ))}
        // </ul>
      )}
      <FooterButtons />
    </div>
  );
};

export default ResultPage;

const DataContainer = styled.div`
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
`;

const DataPaper = styled(Paper)`
  width: 360px;
  padding: 4px;
  margin-bottom: 16px;
  margin-right: 16px;
`;
