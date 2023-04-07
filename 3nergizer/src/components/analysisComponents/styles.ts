import styled from "styled-components";

export const StyledPanel = styled.div`
  padding: 10px;
  margin: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  p {
    color: #5e5e5f;
    font-size: 20px;
  }

  i {
    img {
      width: 35px;
      height: 100%;
    }
  }
`;
