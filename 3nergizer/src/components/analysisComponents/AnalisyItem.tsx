import React from 'react';
import * as S from './styles'

interface AnalisyPanelItemProps {
    value?: number;
    name?: string;
    img?: string;
    rate?: number;
    children?:React.ReactNode
  }
  
  const AnalisyPanelItem = ({
    value,
    name,
    img,
    rate,
    children
  }: AnalisyPanelItemProps) => {
    return (
      <S.StyledAnalisyPanelItem>
        {children}
        <header  className="ge">
          <p>R${value}</p>
        </header>
  
        <article className="ge tr di en tr">
          <p>{name}</p>
          <img src={img} alt="" />
        </article>
  
        <footer className="ge tr di en tr">
          <p>{rate}%</p>
        </footer>
      </S.StyledAnalisyPanelItem>
    );
  };


export default AnalisyPanelItem