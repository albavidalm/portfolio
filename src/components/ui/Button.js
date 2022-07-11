const Button = ({ children, onClickModal }) => {
  return (
    <button type="button" onClick={onClickModal}>
      {children}
    </button>
  );
};
export default Button;
