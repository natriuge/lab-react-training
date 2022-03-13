

function NumbersTable(props) {

    let numbers = [];

    for (let i = 1; i <= props.limit; i++) {
        numbers.push(i);
        
    }

    return (
        <table>
            <th>
                {numbers.map((currentElement) => (
                    <th className = "numbersTable-layout" style = {{ backgroundColor: currentElement % 2 !== 0 ? 'white' : 'red'}}>
                    {currentElement}
                    </th>
                ))}
            </th>
        </table>
    );


}



    

 

export default NumbersTable;

// cria uma array até o numero limite
// renderiza cada elemento da array
// se o elemento for par deve ser vermelho
// se for impar mantem branco



