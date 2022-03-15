import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const IndexPage: React.FC = () => {
  return (
    <>
      <div>당신의 유형은...</div>
      <div>1순위는 ㅇㅇㅇ</div>
      <Button variant="outlined">
        <Link to="/chart">통계 결과 보기</Link>
      </Button>
      <br />
      <Button variant="contained">
        <Link to="/result">무지개 통계 보기</Link>
      </Button>
      <br />
      <Button variant="contained" color="error">
        <Link to="/learn">기초페이지로 이동하기</Link>
      </Button>
    </>
  );
};

export default IndexPage;
