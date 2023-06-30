import * as C from './styled';
import charImg from '../../img/char.png'

type props = {
    y:number,
    x:number,
    charPos:number
}

export const Char = ({y, x, charPos}:props)=>{
    
    const size = 30

    return (
        <C.Contanier 
            charImg={charImg}
            y={(y * size)}
            x= {(x * size)} 
            charPos={charPos}
        >
        </C.Contanier>
    )
}