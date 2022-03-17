

function NumbersTable(props) {

    let numbers = [];

    for (let i = 1; i <= props.limit; i++) {
        numbers.push(i);
        
    }

    return (
        <div className = "table-container">
            <table>
                <thead>
                    <tr>
                        {numbers.map((currentElement) => (
                            <th className = "numbersTable-layout"
                            style = {{ backgroundColor: currentElement % 2 !== 0 ? 'white' : 'red'}}
                            key = {currentElement.toString()}>
                            <p>{currentElement}</p>
                            </th>
                        ))}
                    </tr>
                </thead>
            </table>
        </div>
    );


}


export default NumbersTable;




