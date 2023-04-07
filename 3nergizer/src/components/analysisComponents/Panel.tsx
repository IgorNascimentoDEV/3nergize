import React from "react";
import * as S from "./styles";

interface PanelProps {
}

import logo from '../../assets/logo.svg';

const Panel = ({}: PanelProps) => {
  return (
    <S.StyledPanel>
        <p>Entenda Sua Conta</p>
        <i>
          <img src={logo} alt="" />
        </i>
    </S.StyledPanel>
  );
};

export default Panel;
 