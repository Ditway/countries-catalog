import React, { useState, useEffect } from "react";
import "../dist/css/backtotop.css"

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`back-to-top-button ${showButton ? "active" : ""}`}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </div>
  );
};

export default BackToTop;
