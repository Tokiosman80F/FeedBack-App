function Button({ children, version, type, isDisable }) {
  return (
    <button disabled={isDisable} type={type} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  isDisable: false,
  version: "primary",
  type: "button",
};
export default Button;
