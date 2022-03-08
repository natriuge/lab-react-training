import Rating from "./Rating";

function DriverCard(props) {
    return (
        <div className = "driver-template">
            <div>
                <img src = {props.img} alt = "driver" className = "driver-pic"/>
            </div>
            <div className = "driver-info" style={{color:'white'}}>
                <h2>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                {props.car.model} - {props.car.licensePlate}
            </div>
        </div>
    )
}

export default DriverCard;