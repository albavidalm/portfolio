const Button = ({ children, onClickModal }) => {
  return (
    <button type="button" onClick={onClickModal} className="btn">
      {children}
    </button>
  );
};
export default Button;
