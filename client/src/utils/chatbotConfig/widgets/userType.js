const UserType = (props) => {
    const options = [
    
        { text: "Soy familia de acogida", handler: () => {props.actionProvider.handleUserType("familia de acogida")}, id: 1 },
        { text: "Estoy interesado", handler: () => {props.actionProvider.handleUserType("interesado")}, id: 2 },
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="chat-button">{option.text}</button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;

}

export default UserType;