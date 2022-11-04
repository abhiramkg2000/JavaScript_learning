import "./styles.css";
import { useState, useRef } from "react";

export default function App() {
  const [enter, setEnter] = useState(false);
  const [mousePosition, setMousePosition] = useState({});
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    setEnter(true);
  };

  const handleMouseleave = () => {
    setEnter(false);
    buttonRef.current.removeAttribute("disabled");
  };

  const handleMouseMove = (e) => {
    //console.log(e.clientX+" "+e.clientY);
    if (e.clientX<170) {
      setMousePosition({ x: e.clientX-130, y: e.clientY - 75 });
    } else {
      setMousePosition({ x: e.clientX - 220, y: e.clientY - 92 });
    }
  };

  console.log(mousePosition);

  if (enter && inputRef.current.value !== "ad") {
    buttonRef.current.setAttribute("disabled", true);
  } else if (enter && inputRef.current.value === "ad") {
    buttonRef.current.removeAttribute("disabled");
  }

  return (
    <div className="App">
      <input ref={inputRef} />
      <br />
      <br />
      <div
        className={
          enter === true && inputRef.current.value !== "ad"
            ? "move box disable"
            : "fixed box"
        }
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseleave}
        onMouseMove={handleMouseMove}
      >
        <button
          ref={buttonRef}
          onClick={(e) => console.log("clicked")}
          style={enter === true && inputRef.current.value === "ad"?
          {textTransform:"uppercase"}:
            { transform: `translateX(${mousePosition.x}px)` }
          }
        >
          Login
        </button>
      </div>
      {/* {
        console.log(enter)
        // console.log(buttonRef.current)
      } */}
    </div>
  );
}
