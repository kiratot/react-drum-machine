import React from "react";

const OnOffButton = ({ on, handleClick }) => {
  return (
    <div className="on-off">
      <label className="checkboxControl">
        <input type="checkbox" checked={on} onChange={handleClick} />
        <div>ΟΙ</div>
        <b></b>
        <span className="indicator"></span>
      </label>
    </div>
  );
};

export default OnOffButton;
