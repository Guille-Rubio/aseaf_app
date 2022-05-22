const AgeRange = (props) => {
    const options = [

        { text: "26-30", handler: () => { props.actionProvider.handleAgeQuestion("Si") }, id: 1 },
        { text: "31-40", handler: () => { props.actionProvider.handleAgeQuestion("31-40") }, id: 2 },
        { text: "41-50", handler: () => { props.actionProvider.handleAgeQuestion("41-50") }, id: 3 },
        { text: "51-60", handler: () => { props.actionProvider.handleAgeQuestion("51-60") }, id: 4 },
        { text: "+60", handler: () => { props.actionProvider.handleAgeQuestion("+60") }, id: 5 },
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="chat-button">{option.text}</button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;

}

export default AgeRange;