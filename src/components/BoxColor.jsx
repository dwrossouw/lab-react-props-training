function BoxColor(props) {
  const { r, g, b } = props;

  const colorMix = `rgb(${r},${g},${b})`;
  const divStyles = {
    height: "100px",
    border: "2px solid black",
    margin: "10px",
    backgroundColor: colorMix,
    textAlign: "center",
    color: "white",
    fontSize: "30px"
  };
  return <div style={divStyles}>
    <p>{colorMix}</p>
  </div>;
}

export default BoxColor;
