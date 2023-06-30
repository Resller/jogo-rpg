import styled from "styled-components";

export const Contanier = styled.div`
  width: 100%;
  min-height:100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #25282D;
`
export const Map = styled.div <{map:string}>`
  width: 480px;
  height:480px;
  position: relative;
  background-image: url(${props=>props.map});
  background-position: left top;
  background-size: 100%;
`