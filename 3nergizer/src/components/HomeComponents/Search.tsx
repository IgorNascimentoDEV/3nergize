import React, {useState, useEffect} from "react";
import * as S from "./styles";

interface SearchProps {
  amount:string | number;
}

const Search = ({amount}: SearchProps) => {

  const [myValue, setMyValue] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem('valorTotal');
    if (storedValue) {
      setMyValue(storedValue);
    }
  }, []);

  return (
    <S.StyledSearch>
      <span>
        <p>Gasto Atual</p>
      </span>
      <span>
        R${myValue}
      </span>
    </S.StyledSearch>
  );
};

export default Search;
