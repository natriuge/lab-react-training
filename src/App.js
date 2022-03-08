import './App.css';
import IdCard from './IdCard.js'
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Rating from './Rating';

const idCard = [ 
  {
  lastName: 'Doe',
  firstName: 'John',
  gender: 'male',
  height: 178,
  birth: new Date("1992-07-14"),
  picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
  lastName:'Delores',
  firstName: 'Obrien',
  gender:'female',
  height: 172,
  birth: new Date("1988-05-11"),
  picture: "https://randomuser.me/api/portraits/women/44.jpg"
  }
]


function App() {
  return (
    <div>
      <div>
      <h1>IdCard</h1>
        {idCard.map((currentID) => {
         return (
            <IdCard
            lastName = {currentID.lastName}
            firstName = {currentID.firstName}
            gender = {currentID.gender}
            height = {currentID.height/100}
            birth = {currentID.birth.toDateString()}
            picture = {currentID.picture}
            />
          )
        })}
      </div>
      <div>
        <h1>Greetings</h1>
        <Greetings lang = "de">Ludwig</Greetings>
        <Greetings lang = "fr">François</Greetings>
      </div>
      <div>
        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
      <div>
        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div>
        <h1>CreditCard</h1>
        <CreditCard
        type = "Visa"
        number = "0123456789018845"
        expirationMonth = {3}
        expirationYear = {2021}
        bank = "BNP"
        owner = "Maxence Bouret"
        bgColor = "#11aa99"
        color = "white" 
        />
    
        <CreditCard
        type = "Master Card"
        number = "0123456789010995"
        expirationMonth = {3}
        expirationYear = {2021}
        bank = "N26"
        owner = "Maxence Bouret"
        bgColor = "#eeeeee"
        color = "#222222"
        />
    
        <CreditCard
          type = "Visa"
          number = "0123456789016984"
          expirationMonth = {12}
          expirationYear = {2019}
          bank = "Name of the Bank"
          owner = "Firstname Lastname"
          bgColor = "#ddbb55"
          color = "white" 
        />
      </div>
      <div>
        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
    </div>
  );
}


export default App;
