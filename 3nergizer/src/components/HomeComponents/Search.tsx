import React from "react";
import * as S from "./styles";

interface SearchProps {
  amount:string;
}

const Search = ({amount}: SearchProps) => {
  return (
    <S.StyledSearch>
      <span>
        <p>Gasto Atual</p>
      </span>
      <span>
        R${amount}
      </span>
    </S.StyledSearch>
  );
};

export default Search;
