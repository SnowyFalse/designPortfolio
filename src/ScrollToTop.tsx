import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, {useEffect, useState} from "react";
import './ScrollToTop.scss';

export function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const displayScrollButton = showTopBtn ? <KeyboardArrowUpIcon className={'scrollUp'} onClick={goToTop}/> : '';
  return (
    <>
      {displayScrollButton}
    </>
  )
}