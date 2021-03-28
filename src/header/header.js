
const Header = (props) => {
  const { title } = props;
  const divStyles = {
    border: "1px solid #E8E8E8",
    background: "blue",
    padding: "0.5 rem",
    color: "white",
    width: "300px",
  };
  return (
    <>
      <div style={divStyles}>
        <h2>{title}</h2>
      </div>
    </>
  );
}

export default Header;