import { useEffect } from "react";
import useBool from "./useBool";
import useWindowSize from "./useWindowSize";

const useMenu = (ref) => {
  const { mobile } = useWindowSize();
  const showMenu = useBool();

  useEffect(() => {
    !mobile && showMenu.off();
  }, [mobile, showMenu]);

  useEffect(() => {
    if (!showMenu.value) return;

    const closeMenu = (e) => {
      if (e.target.classList.contains("hamburger")) return;

      if (!ref.current.contains(e.target)) {
        showMenu.off();
      }
    };
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  });

  return showMenu;
};

export default useMenu;
