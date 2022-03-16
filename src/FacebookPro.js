function FacebookPro(props) {

return (

<div className = 'card-layout'>
    <div className = 'picture-layout'>
        <img src = {props.img} alt = 'ID'/>
    </div>
        <div className='information-layout'>
            <b>First name:</b> {props.firstName} 
            <br/>
            <b>Last name:</b> {props.lastName}
            <br/>
            <b>Country:</b> {props.country}
            <br/>
            <b>Type</b> {props.isStudent === true ? 'Student' : 'Teacher'}
        </div>
</div>
)

}


export default FacebookPro;