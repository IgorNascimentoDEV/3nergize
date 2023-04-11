import React from 'react';
import * as S from './styles'
import { CSSProperties } from 'styled-components';

interface AnalisyPanelItemProps {
    value?: number;
    name?: string;
    img?: string;
    rate?: number;
    headerColor?:string;
    botttomColor?:string;
  }
  
  const AnalisyPanelItem = ({
    value,
    name,
    img,
    rate,
    headerColor,
    botttomColor
  }: AnalisyPanelItemProps) => {
    return (
      <S.StyledAnalisyPanelItem>
        <header style={{backgroundColor:headerColor}}>
          <p>R${value}</p>
        </header>
  
        <article>
          <p>{name}</p>
          <img src={img} alt="" />
        </article>
  
        <footer style={{backgroundColor:botttomColor}}>
          <p>{rate}%</p>
        </footer>
      </S.StyledAnalisyPanelItem>
    );
  };


export default AnalisyPanelItem