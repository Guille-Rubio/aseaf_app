
const ConsentGDPR = (props) => {
    const options = [
    
        { text: "Si", handler: () => {props.actionProvider.handleConsentGDPR("Si")}, id: 1 },
        { text: "No", handler: () => {props.actionProvider.handleConsentGDPR("No")}, id: 2 },
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="chat-button">{option.text}</button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;

}

export default ConsentGDPR;