import React from "react";
import * as S from "./StylesPage";

import NavBottomBar from "../components/NavBottomBar/NavBottomBar";

interface AnalysisProps {}

const Analysis = ({}: AnalysisProps) => {
  return (
    <S.StyledAnalysisPage>
      <p>pagina de analise</p>
      <NavBottomBar />
    </S.StyledAnalysisPage>
  );
};

export default Analysis;
