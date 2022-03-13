import profiles from './data/berlin.json';


function Facebook() {

    return (
        profiles.map((currentElement) => (
        <div className = 'card-layout'>
            <div className = 'picture-layout'>
                <img src = {currentElement.img} alt = 'ID' key = {currentElement.toString()}/>
            </div>
            <div className='information-layout'>
                <b>First name:</b> {currentElement.firstName} 
                <br/>
                <b>Last name:</b> {currentElement.lastName}
                <br/>
                <b>Country:</b> {currentElement.country}
                <br/>
                <b>Type</b> {currentElement.isStudent === true ? 'Student' : 'Teacher'}
            </div>
        </div>
        ))
    
    )

    
}

export default Facebook;