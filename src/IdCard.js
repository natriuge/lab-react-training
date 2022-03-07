import './index.css'

function IdCard({ lastName, firstName, gender, height, birth, picture}) {
    return (
       <div className = 'card-layout'>
            <div className = 'picture-layout'>
                <img src = {picture} alt = "idCard"/>
            </div>
            <div className='information-layout'>
                <b>First name:</b> {firstName}
                <br/>
                <b>Last name:</b> {lastName}
                <br/>
                <b>Gender:</b>{gender}
                <br/>
                <b>Height:</b> {height}m
                <br/>
                <b>Birth:</b> {birth}
            </div>
    </div>
    )
}
 

export default IdCard;