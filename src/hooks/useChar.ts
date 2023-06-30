import { useState } from "react"
import { mapSpots } from "../data/mapSpots";


export const useChar = ()=>{
    const [pos,setPos] = useState({y:5,x:3});
    const [charPos,setCharPos] = useState(120);

    const moveLeft = ()=>{
        setPos(pos=>({
            y: pos.y, 
            x: canMove(pos.x -1,pos.y) ? pos.x - 1 :pos.x  }
        ))
        setCharPos(90)
    }
    const moveright = ()=>{
        setPos(pos=>({
            y: pos.y, 
            x: canMove(pos.x + 1,pos.y) ? pos.x + 1: pos.x}
        ))
        setCharPos(60)
    }
    const moveTop = ()=>{
        setPos(pos=>({
            y: canMove(pos.x,pos.y - 1) ? pos.y - 1 : pos.y , 
            x: pos.x}
        ))
        setCharPos(30)
    }
    const moveBottom = ()=>{
        setPos(pos=>({
            y: canMove(pos.x,pos.y + 1) ? pos.y + 1 : pos.y , 
            x: pos.x}
        ))
        setCharPos(120)
    }

    const canMove = (x: number, y: number) => {
        if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
            return (mapSpots[y][x] === 1);
        }
        return false;
    }

    return {
        pos,
        charPos,
        moveright,
        moveLeft,
        moveTop,
        moveBottom
    }
}