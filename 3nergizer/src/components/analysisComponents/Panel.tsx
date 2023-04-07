import React from "react";
import * as S from "./styles";

interface PanelProps {
}

const Panel = ({}: PanelProps) => {
  return (
    <S.StyledPanel>
      <span>
        <p>Gasto Atual</p>
      </span>
      <span>
        <i>
          icone
        </i>
      </span>
    </S.StyledPanel>
  );
};

export default Panel;
