import styled from "styled-components";

export const StyledNavBottomBar = styled.main`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #06a37c;

  border-radius: 0px 0px 36px 36px;
`;

export const StyledItemBottomBar = styled.div`
  height: 50px;
  width: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 1px dashed red;
`;
