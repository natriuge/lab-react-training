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

