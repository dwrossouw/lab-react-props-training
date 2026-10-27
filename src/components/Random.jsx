function Random(props) {
  const { min, max } = props;

  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  const styleResults = {
    border: "solid 2px",
    paddingLeft: "5px",
    fontSize: "20px",
    margin: "10px",
  };
  return (
    <div style={styleResults}>
      <p>Random value between {min} and {max} => {randomNum}</p>
    </div>
  );
}

export default Random;
