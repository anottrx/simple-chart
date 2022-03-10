import React, { useState } from "react";
import { ResultData } from "../data/resultData";

const Item = (data: ResultData) => {
  return (
    <li>
      gender: {data.gender} / age: {data.age} / salary: {data.salary} <br />
      workplace: {data.workplace} / drinks: {data.drinks} / mobile:{" "}
      {data.mobile} <br />
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
            <Item key={`${data.id}`} gender={data.gender} age={data.age} salary={data.salary}
              workplace={data.workplace} drinks={data.drinks} mobile={data.mobile} id={data.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultPage;
