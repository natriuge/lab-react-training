import { useState } from 'react';


function Carousel(props) {

    const {images} = props

    const [state, setState] = useState(0)

    function leftClick(){

        state === 0 ? setState(images.length -1) : setState(state -1) 
       
    }

    function rightClick(){

        state === images.length-1 ? setState(0) : setState(state +1)
        
    }

    return (
        <div className = 'carousel-container'>
        <button onClick = { leftClick } className = 'carousel-button'> Left </button>
        <img src = {images[state]} alt= 'id'/>
        <button onClick = { rightClick} className = 'carousel-button' >Right </button>
        </div>
    )

}


export default Carousel;



//mostra imagem inicial 
// state com imagem inicial

//mostra 2 botoes (left e right)


//se o botao for apertado
// event click do botao com target de direita ou esquerda

//muda a imagem
// nova função muda o state

