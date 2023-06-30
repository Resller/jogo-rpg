import styled from "styled-components";

type props = {
  charImg : string,
  y:number,
  x:number,
  charPos:number
}

export const Contanier = styled.div <props>`
  width: 30px;
  height:30px;
  position: absolute;
  top:${props=> props.y}px;
  left:${props=> props.x}px;
  background-image: url(${props=>props.charImg});
  background-position-y: ${props=>props.charPos}px;
`
