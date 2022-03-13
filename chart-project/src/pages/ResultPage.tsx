import React, { useState } from "react";
import { ResultData } from "../data/resultData";

const Item = (data: ResultData) => {
  return (
    <li>
      question: {data.question} result:{data.result}
    </li>
  );
};

const ResultPage: React.FC = () => {
  const [data, setData] = useState<ResultData[] | null>(null);

  const handleClick = () => {
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
  };

  return (
    <div>
      ResultPage
      <br />
      <button onClick={handleClick}>데이터 가져오기</button>
      {data && (
        <ul>
          {data.map((data) => (
            <Item
              key={`${data.id}`}
              question={data.question}
              id={data.id}
              result={data.result}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultPage;
