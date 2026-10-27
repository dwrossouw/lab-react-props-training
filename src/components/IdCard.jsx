
function IdCard(props){
    const {lastName, firstName, gender, height, birth, picture} = props;
   
    const formattedDate = birth.toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    const styleIdCard = {border: "solid 1px",
        padding: "5px",
        margin: "10px",
        display: "flex"
    }
    const styleText = {marginLeft: "5px", lineHeight: "5px" };

    return (
        <div style = {styleIdCard}>
            <div>
                <img src={picture} alt="" />
            </div>
            <div style={styleText}>
                <p><b>First name: </b>{firstName}</p>
                <p><b>Last name: </b>{lastName}</p>
                <p><b>Gender: </b>{gender}</p>
                <p><b>Height: </b>{height}</p>
                <p><b>Birth: </b>{formattedDate}</p>
            </div>
        </div>
    )
}

export default IdCard;