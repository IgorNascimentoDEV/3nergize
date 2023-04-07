import React from "react";
import * as S from "./styles";

import AnalisyPanelItem from "./AnalisyItem";

import tower from "../../assets/tower.svg";
import building from "../../assets/building.svg";
import water from "../../assets/water.svg";
import file from "../../assets/file.svg";
import hand from "../../assets/hand.svg";

interface AnalisyPanelProps {}

const AnalisyPanel = ({}: AnalisyPanelProps) => {
  return (
    <S.StyledAnalisyPanel>
      <AnalisyPanelItem value={50} name="GERAÇÃO" img={water} rate={41} />
      <AnalisyPanelItem value={50} name="TRANSMISSÃO" img={tower} rate={3}/>
      <AnalisyPanelItem value={50} name="DISTRIBUIÇÃO" img={building} rate={16}/>
      <AnalisyPanelItem value={50} name="ENCARGOS" img={hand} rate={9}/>
      <AnalisyPanelItem value={50} name="TRIBUTOS" img={file} rate={12}/>
    </S.StyledAnalisyPanel>
  );
};

export default AnalisyPanel;
