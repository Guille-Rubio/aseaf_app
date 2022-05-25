const ChildrenNumber = (props) => {

    let childrenNum = "0";

    const handleSelector = (event) => {
        childrenNum = event.target.value;
        console.log("selector value", childrenNum);
    }

    const handleAnswer = (event) => {
        event.preventDefault();
        (console.log("CHILDREN NUMBER", childrenNum))
        props.actionProvider.handleChildrenNumber(childrenNum)
    }

    return <div className="options-container">

        <label>Número de hijos</label>
        <select onChange={handleSelector}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
        </select>
        <button onClick={handleAnswer}>Confirmar</button>
    </div>;


}


export default ChildrenNumber;