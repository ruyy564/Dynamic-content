const Label = ({ props }) => {
  const styles = {
    visibility: props.visible ? 'visible' : 'hidden',
  };

  return (
    <span className="label" style={styles}>
      {props.caption}
    </span>
  );
};

export default Label;
