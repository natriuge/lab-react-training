import './index.css';
import { useState } from "react";


function LikeButton() {

    const arrColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const [state, setState] = useState(0);
    
    
    function IncrementClick() {
        if (state >= 0) {
            setState(state + 1);
        }
    }

    const sorted = { backgroundColor: arrColors[state % arrColors.length]}

    return (
    <div className = 'like-button-container'>
    <button style = {sorted} onClick = { IncrementClick } className = {'like-button-layout'} > {state} Likes</button>
    </div>
    )
}


export default LikeButton;