import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const FooterButtons: React.FC = () => {
  return (
    <Button variant="outlined">
      <Link to="/">메인으로 돌아가기</Link>
    </Button>
  );
};

export default FooterButtons;
