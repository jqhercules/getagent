import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

import styles from "./style.module.scss";

export const Modal = ({ children, isActive, setIsActive }) => {
  const backdrop = useRef(null);

  const handleClick = (evt) => {
    if (
      evt.target.classList.contains(styles.overlay) ||
      evt.target.classList.contains("cross")
    ) {
      backdrop.current.classList.remove("active");

      // Workaround for render animated issues
      // TODO: Replace with framer-motion
      window.setTimeout(() => {
        setIsActive(false);
      }, 500);
    }
  };

  useEffect(() => {
    const { current } = backdrop;

    if (isActive) {
      // Workaround for render animated issues
      // TODO: Replace with framer-motion
      window.setTimeout(() => {
        current.classList.add("active");
      }, 0);
    }
  }, [isActive]);

  // Approach for not using ternary operator to render component in parent
  if (!isActive) return null;

  return createPortal(
    <div className={styles.overlay} ref={backdrop} onClick={handleClick}>
      <div className={styles.container}>
        <div className="cross" onClick={handleClick}>
          <i className="ri-close-fill"></i>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
