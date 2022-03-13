import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";

const IndexPage: React.FC = () => {
  return (
    <>
      <div>당신의 유형은...</div>
      <Button variant="outlined">
        <Link to="/result">통계 보기</Link>
      </Button>
      <br />
      <Button variant="contained" color="success">
        <Link to="/learn">기초페이지로 이동하기</Link>
      </Button>
    </>
  );
};

export default IndexPage;
