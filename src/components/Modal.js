const Modal = ({ children, show, changeShow }) => {
  return (
    <>
      <section className="modal">
        <div className="modal__box">{children}</div>
      </section>
    </>
  );
};

export default Modal;
