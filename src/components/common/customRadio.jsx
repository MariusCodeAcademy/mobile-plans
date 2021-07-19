const CustomRadio = (props) => {
  return (
    <div onClick={() => props.onClick(props.value)} className="radio-container">
      {!props.checked ? <strong>Not selected</strong> : <strong>Selected</strong>}
      <span> {props.children}</span>
    </div>
  );
};

export default CustomRadio;
