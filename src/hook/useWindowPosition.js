import { useState, useLayoutEffect } from "react";

export default function useWindowPosition(id) {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePositionOnScoll() {
      const offsetSetWindowHight = window.document.getElementById(id)
        .offsetHeight;
      if (window.pageYOffset > offsetSetWindowHight * 0.7) setAnimation(true);
    }

    window.addEventListener("scroll", updatePositionOnScoll);
    updatePositionOnScoll();
    return window.removeEventListener("scroll", updatePositionOnScoll);
  }, [id]);

  return animation;
}
