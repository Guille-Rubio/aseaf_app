const ChildrenAge = (props) => {
    /* const options = [

        { text: "0", handler: () => { props.actionProvider.handleAgeQuestion("0") }, id: 1 },
        { text: "1", handler: () => { props.actionProvider.handleAgeQuestion("1") }, id: 2 },
        { text: "2", handler: () => { props.actionProvider.handleAgeQuestion("2") }, id: 3 },
        { text: "3", handler: () => { props.actionProvider.handleAgeQuestion("3") }, id: 4 },
        { text: "+3", handler: () => { props.actionProvider.handleAgeQuestion("+3") }, id: 5 },
    ]; */

   /*  const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="chat-button">{option.text}</button>
    )); */

    return <div className="options-container">
        <selector>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
        </selector>
    </div>;


}

export default ChildrenAge;