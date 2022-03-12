import { useState } from 'react';
import './index.css';


function ClickablePicture(props) {

    const [state, setState] = useState(true);

    function handleClick(event) {

        console.log(state)
        setState(!state)

    }


    return (
        <div className = 'clickable-pic-layout'>
            <img src = { state ? props.img : props.imgClicked } onClick = {handleClick} alt= 'img'/>
        </div>
    )

    // const [state, setState] = useState({
    //     toggle: true
    // });

    // function handleClick() {
    //     setState({toggle: !state.toggle})
    // }

    // return (
    //     <div className = 'clickable-pic-layout'>
    //         <img src = { state.toggle ? props.img : props.imgClicked } onClick = {handleClick} alt = 'person'/>
    //     </div>
    // )
}



export default ClickablePicture;