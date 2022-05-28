import React, { useRef } from "react";
import SearchIcon from "../assets/img/search-icon.png";

const goToQuote = (quoteNo, total) => {
  if (parseInt(quoteNo) > total) quoteNo = total;
  if (quoteNo <= 1) {
    window.location.replace("#");
    return;
  } else quoteNo -= 1; // -1 for better view (to make it center)
  window.location.replace(`#q-${quoteNo}`);
};

const NavBox = function (props) {
  const inputRef = useRef();

  return (
    <div className="nav-container">
      <nav className="nav">
        {/* <a href="#" className="nav__prev-page">
          <span></span>
        </a> */}
        <div className="nav__goto">
          <input
            ref={inputRef}
            className="nav__goto-input"
            type="number"
            placeholder="Quote Number..."
            min="1"
            onKeyDown={(e) =>
              e.key === "Enter" &&
              goToQuote(inputRef.current.value, props.totalQuotes)
            }
          />
          <span
            className="nav__goto-btn"
            onClick={() => goToQuote(inputRef.current.value, props.totalQuotes)}
          >
            <img src={SearchIcon} alt="" />
          </span>
        </div>
        {/* <a href="#" className="nav__next-page"></a> */}
      </nav>
    </div>
  );
};

export default NavBox;
