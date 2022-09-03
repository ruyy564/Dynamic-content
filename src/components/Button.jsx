const Button = ({ props }) => {
  const styles = {
    width: props.width,
    height: props.height,
    visibility: props.visible ? 'visible' : 'hidden',
  };

  return (
    <button className="button-accept" style={styles}>
      {props.caption}
    </button>
  );
};

export default Button;
