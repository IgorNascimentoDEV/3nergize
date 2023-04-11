import styled from "styled-components";


export const StyledInputs = styled.div`
  margin: auto;
  padding: 10px;
  width: 90vw;
  height: 45vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #E4E4E4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: relative;
  top: -50px;
 
  
  

  > div {
    position: relative;
    left: 10px;
    flex-basis: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }
label {
    font-size: 18px;
    margin-bottom: 3px;
    margin-top: 5px;
    font-weight: 500;
}
  input {
    width: 90%;
    height: 60px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    border: none;
    display: flex;
    margin-bottom: 100px;
    font-size: 16px;
    text-align: center;
    
    
  }

  button {
    position: absolute;
    bottom: 20px;
    right: 15px;
    width: 81px;
    height: 46px;
    background: #96F196;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
  }
  
`;

export const StyledDisplaykW = styled.div`
background: #96F196;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
border-radius: 5px;
 width: max-content;
 height: 110px;
 display: flex;
 align-items: center;
 padding: 15px;
 margin-bottom: 40px;
 font-weight: 400;
 font-size: 15px;
 text-align: center;
 h3 {
    margin-bottom: 10px;
}

p{
    font-size:1.3em
}
}`

 

 export const StyledDisplayValor = styled.div`
 background: #96F196;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
border-radius: 5px;
width: 160px;
height: 110px;
display: flex;
justify-content: center;
padding: 15px;
margin-bottom: 40px
font-weight: 400;
font-size: 15px;
text-align: center;
h3 {
    margin-bottom: 10px;
}

p{font-size:1.7em}
}`
 
 export const StyledDisplayWrapper = styled.div`
 display: flex;
 justify-content: space-around;

 margin-bottom: 15%;
}
`

