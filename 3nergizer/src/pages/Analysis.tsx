import React from "react";
import * as S from "./StylesPage";

import NavBottomBar from "../components/NavBottomBar/NavBottomBar";
import Panel from "../components/analysisComponents/Panel";


interface AnalysisProps {}

const Analysis = ({}: AnalysisProps) => {
  return (
    <S.StyledAnalysisPage>
      <Panel/>
      <NavBottomBar />
    </S.StyledAnalysisPage>
  );
};

export default Analysis;
