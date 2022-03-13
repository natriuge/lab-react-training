

function NumbersTable(props) {

    let numbers = [];

    for (let i = 1; i <= props.limit; i++) {
        numbers.push(i);
        
    }

    return (
        <table>
            <thead>
                <tr>
                    {numbers.map((currentElement) => (
                        <th className = "numbersTable-layout" style = {{ backgroundColor: currentElement % 2 !== 0 ? 'white' : 'red'}} key = {currentElement.toString()}>
                        {currentElement}
                        </th>
                    ))}
                </tr>
            </thead>
        </table>
    );


}


export default NumbersTable;




