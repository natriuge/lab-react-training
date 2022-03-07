import './index.css'

function Greetings(props) {
    const de = 'Hallo'
    const en = 'Hello'
    const es = 'Hola'
    const fr = 'Bonjour'

    
        if (props.lang === 'de') {
            return <div className = "greetings-template">{de} {props.children}</div>
        } else if (props.lang === 'en') {
            return <div className = "greetings-template">{en} {props.children}</div>
        } else if (props.lang === 'es') {
            return <div className = "greetings-template">{es} {props.children}</div>
        } else if (props.lang === 'fr') {
            return <div className = "greetings-template">{fr} {props.children}</div>
        }
}

export default Greetings;