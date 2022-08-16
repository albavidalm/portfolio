import { useEffect, useState } from "react";

const ButtonTop = () => {
  const [topButton, setTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTopButton(true);
      } else {
        setTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      {topButton && (
        <button type="button" onClick={scrollUp} className="btn-top">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};
export default ButtonTop;
