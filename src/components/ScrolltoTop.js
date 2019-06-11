import React, { useEffect } from "react";

const ScrolltoTop = prevProps => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return null;
};

export default ScrolltoTop;
