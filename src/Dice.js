import { useState } from 'react';
import diceEmpty from './assets/images/dice-empty.png';
import dice1 from './assets/images/dice1.png';
import dice2 from './assets/images/dice2.png';
import dice3 from './assets/images/dice3.png';
import dice4 from './assets/images/dice4.png';
import dice5 from './assets/images/dice5.png';
import dice6 from './assets/images/dice6.png';


const diceImgRandom = [dice1, dice2, dice3, dice4, dice5, dice6]

function randomDice() {

    const indiceAleatorio = Math.floor(Math.random() * (diceImgRandom.length));
    
    return diceImgRandom[indiceAleatorio]

}


function Dice() {

    const [state, setState] = useState(dice3)

    function handleClick() {
        setState(diceEmpty)
        const randomDice2 = randomDice()
        setTimeout(() => {
            setState(randomDice2)}, 1000);}


    return (
        <img src = {state} onClick = {handleClick} alt = 'dice' className = 'dice-template'/>
    )

}


export default Dice;