import visa from './assets/images/visa.png';
import mastercard from './assets/images/master-card.svg';


function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {

    const logo = type === 'Visa' ? visa : mastercard;
    const ccMonth = expirationMonth.toString().length === 1 ? "0" + expirationMonth : expirationMonth.toString()
    const ccYear = expirationYear.toString()

    return (
    <div className = 'cc-container'>
        <div className = 'cc-template' style = {{ backgroundColor: bgColor}}>
            <div className = 'image-template' style = {{ backgroundColor: bgColor}}>
                <img src = {logo} alt = "Credit Card" className = 'logo-image'/>
            </div>
            <p className = 'cc-number' style = {{color}}> •••• •••• •••• {number.substring(12)} </p>
            <p className = 'cc-expiration' style = {{color}}>Expires {ccMonth}/{ccYear.substring(0,2)}     {bank} </p>
            <p className = 'cc-owner' style = {{color}}>{owner}</p>
        </div>
    </div>
    )
    
}


export default CreditCard;