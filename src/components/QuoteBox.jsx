import React from "react";

const QuoteBox = function (props) {
  return (
    <div className="quote-box" id={`q-${props.serialNumber}`}>
      {props.isNumbered && (
        <span className="quote-box__serial">{props.serialNumber}</span>
      )}
      <blockquote className="quote-box__quote">{props.quote}</blockquote>
      <span className="quote-box__mentor">~ {props.author}</span>
    </div>
  );
};

export default QuoteBox;
