import profiles from './data/berlin.json';
import { useState } from 'react';
import FacebookPro from './FacebookPro';


function Facebook() { 
    
    const [state, setState] = useState([...profiles])

    const [selectedCountry, setSelectedCountry] = useState(null)
   

    function renderButtons() {

        const uniqueCountries = [...new Set(state.map((currentElement) =>
            currentElement.country))]

        // const unique = [...new Map(cloneProfile.map(item => [item.country, item])).values()] 
        // console.log(unique.next().value);

        return uniqueCountries.map((currentCountry) => {
            return (
                <button onClick = {() => setSelectedCountry(currentCountry)} key = {currentCountry}
                style = {{backgroundColor: selectedCountry === currentCountry ? '#A3D2E2' : 'white'}}
                className = 'country-button-layout'>
                {currentCountry}
                </button>
            )
        })
    }

    return (
        <div>
            <div className = 'country-button-container'>
                {renderButtons()}
                <button
                    onClick = {() => setSelectedCountry(null)}
                    className = 'country-button-layout'
                    style = {{backgroundColor: selectedCountry === null ? '#A3D2E2' : '#fff'}}>
                    All
                </button>
            </div>
            <div>
                {profiles.map((currentElement, index) => (
                    <div style = {{ backgroundColor: selectedCountry === currentElement.country ? '#A3D2E2' : 'white' }}>
                    <FacebookPro
                        key = {index}
                        img = {currentElement.img}
                        firstName = {currentElement.firstName}
                        lastName = {currentElement.lastName}
                        country = {currentElement.country}
                        isStudent = {currentElement.isStudent}
                    />
                    </div>
                    ))}
            </div>
        </div>
        
    ) 
    
}

export default Facebook;