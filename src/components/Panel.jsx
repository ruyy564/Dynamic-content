const Panel = ({ props, children }) => {
  const styles = {
    width: props.width,
    height: props.height,
    visibility: props.visible ? 'visible' : 'hidden',
  };

  return (
    <div className="panel" style={styles}>
      {children}
    </div>
  );
};

export default Panel;
