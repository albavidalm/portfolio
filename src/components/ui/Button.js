const Button = ({ children, onClickModal, className }) => {
  return (
    <button type="button" onClick={onClickModal} className={"btn " + className}>
      {children}
    </button>
  );
};
export default Button;
