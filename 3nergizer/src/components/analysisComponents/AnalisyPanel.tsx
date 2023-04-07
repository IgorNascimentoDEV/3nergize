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
      <AnalisyPanelItem
        value={50}
        name="GERAÇÃO"
        img={water}
        rate={41}
        headerColor="#06A37C"
        botttomColor="#06A37C"
      />
      <AnalisyPanelItem
        value={50}
        name="TRANSMISSÃO"
        img={tower}
        rate={3}
        headerColor="#72AFA0"
        botttomColor="#72AFA0"
      />
      <AnalisyPanelItem
        value={50}
        name="DISTRIBUIÇÃO"
        img={building}
        rate={16}
        headerColor="#2A6B39"
        botttomColor="#2A6B39"
      />
      <AnalisyPanelItem
        value={50}
        name="ENCARGOS"
        img={hand}
        rate={9}
        headerColor="#C96923"
        botttomColor="#C96923"
      />
      <AnalisyPanelItem
        value={50}
        name="TRIBUTOS"
        img={file}
        rate={12}
        headerColor="#A30606"
        botttomColor="#A30606"
      />
    </S.StyledAnalisyPanel>
  );
};

export default AnalisyPanel;
