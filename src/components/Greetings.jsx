function Greetings (props){
    
    const {lang} = props;

     const styleGreeting = {border: "solid 2px",
        paddingLeft: "5px",
        fontSize: "20px",
        margin: "10px"
    }
    let greeting = lang === 'de' ? 'Hallo': lang === 'es'? 'Hola': lang === 'fr'? 'Bonjour':'Hello'; 

    return (
        <div style={styleGreeting}>
            <p>{greeting} {props.children}</p>
        </div>
    )
}

export default Greetings;