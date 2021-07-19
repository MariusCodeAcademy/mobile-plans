const CustomRadio = (props) => {
  return (
    <div onClick={() => props.onClick(props.value)} className="radio-container">
      {!props.checked ? (
        <svg height="25" width="25">
          <circle cx="12" cy="12" r="11" stroke="gray" stroke-width="1" fill="white" />
          Sorry, your browser does not support inline SVG.
        </svg>
      ) : (
        <svg height="25" width="25">
          <circle cx="12" cy="12" r="11" stroke="gray" stroke-width="1" fill="red" />
          <circle cx="12" cy="12" r="4" fill="white" />
          Sorry, your browser does not support inline SVG.
        </svg>
      )}
      <span> {props.children}</span>
    </div>
  );
};

export default CustomRadio;
