const ChildrenNumber = (props) => {
    const options = [

        { text: "0", handler: () => { props.actionProvider.handleAgeQuestion("0") }, id: 1 },
        { text: "1", handler: () => { props.actionProvider.handleAgeQuestion("1") }, id: 2 },
        { text: "2", handler: () => { props.actionProvider.handleAgeQuestion("2") }, id: 3 },
        { text: "3", handler: () => { props.actionProvider.handleAgeQuestion("3") }, id: 4 },
        { text: "+3", handler: () => { props.actionProvider.handleAgeQuestion("+3") }, id: 5 },
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="chat-button">{option.text}</button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;

}

export default ChildrenNumber;