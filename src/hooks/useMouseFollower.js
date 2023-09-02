import { useState } from "react";
// This is a Custom Hook For Tracking mouseMove And Creating a Mouse Follower
const useMouseFollower = ({ cursorDot, cursorOutline }) => {
  const [scrollPos, setscrollPos] = useState({ x: 0, y: 0 });
  window.onmousemove = (e) => {
    setscrollPos({ ...scrollPos, x: e.clientX, y: e.clientY });

    cursorDot.current.style.left = `${scrollPos.x}px`;
    cursorDot.current.style.top = `${scrollPos.y}px`;

    cursorOutline.current.style.left = `${scrollPos.x}px`;
    cursorOutline.current.style.top = `${scrollPos.y}px`;

    cursorOutline.current.animate(
      {
        left: `${scrollPos.x}px`,
        top: `${scrollPos.y}px`,
      },
      { duration: 400, fill: "forwards" }
    );
    cursorDot.current.animate(
      {
        left: `${scrollPos.x}px`,
        top: `${scrollPos.y}px`,
      },
      { duration: 500, fill: "forwards" }
    );
  };
};

export default useMouseFollower;
