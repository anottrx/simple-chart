import React, { useRef, useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import styled from "@emotion/styled";
import { Container, Card } from "@mui/material";
import FooterButtons from "../components/FooterButtons";
import { ResultData, RESULT_DATA } from "../data/resultData";
import { COLOR_DATA } from "../data/colorData";

ChartJS.register(ArcElement, Tooltip, Legend);

function makeChart(id: number) {
  console.log(id);
  const doughnut_data = {
    labels: makeArray(id),
    datasets: [
      {
        label: "# of Votes",
        data: makeArray2(id),
        backgroundColor: COLOR_DATA.map((x) => x.backgroundColor),
        borderColor: COLOR_DATA.map((x) => x.borderColor),
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
          {data.map((data) =>
            data.id === 2 || data.id === 6 ? (
              <DataCard variant="outlined">
                <h2>{data.question}</h2>
                <Pie key={data.id} data={makeChart(data.id)} ref={chartRef} />
              </DataCard>
            ) : (
              <DataCard variant="outlined">
                <h2>{data.question}</h2>
                <Doughnut
                  key={data.id}
                  data={makeChart(data.id)}
                  ref={chartRef}
                />
              </DataCard>
            )
          )}
        </DataContainer>
      )}
      <FooterButtons />
    </div>
  );
};

export default ResultPage;

const DataContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`;

const DataCard = styled(Card)`
  width: 360px;
  padding: 4px;
  margin-bottom: 16px;
  margin-right: 16px;
`;
