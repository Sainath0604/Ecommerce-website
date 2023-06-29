import { useState } from "react";
import { BsSun } from "react-icons/Bs";
import { BsMoonStars } from "react-icons/Bs";

function Theme() {
  const [dark, setDark] = useState(false);
  const element = document.documentElement;

  const toggle = () => {
    if (dark) {
      setDark(false);
      element.classList.remove("dark");
    } else {
      setDark(true);
      element.classList.add("dark");
    }
  };
  return (
    <div>
      <div className=" text-xl">
        {dark ? (
          <button
            className="border-2 border-indigo-800 p-2 rounded-full bg-black text-indigo-800"
            onClick={toggle}
          >
            <BsSun />
          </button>
        ) : (
          <button
            className="border-2 border-indigo-800 p-2 rounded-full bg-white text-indigo-800"
            onClick={toggle}
          >
            <BsMoonStars />
          </button>
        )}
      </div>
    </div>
  );
}

export default Theme;
