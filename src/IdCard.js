import './index.css'

function IdCard(props) {
    return (
       <div className = 'card-layout'>
            <div className = 'picture-layout'>
                <img src = {props.picture} alt = 'ID'/>
            </div>
            <div className='information-layout'>
                <b>First name:</b> {props.firstName}
                <br/>
                <b>Last name:</b> {props.lastName}
                <br/>
                <b>Gender:</b> {props.gender}
                <br/>
                <b>Height:</b> {props.height/100}m
                <br/>
                <b>Birth:</b> {props.birth.toDateString()}
            </div>
    </div>
    )
}
 

export default IdCard;