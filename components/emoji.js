const Emoji = (props) => {
  const getSymbol = (name) => {
    switch (name) {
      case "transport":
        return "🚌";
      case "lodging":
        return "🏠";
      case "travel":
        return "✈️";
      case "meal":
        return "🍕";
      case "event":
        return "🎉";
      default:
        return "😀";
    }
  };
  return (
    <span
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
      style={{ fontSize: "20px" }}
    >
      {(props.name && getSymbol(props.name)) || props.symbol}
    </span>
  );
};
export default Emoji;
