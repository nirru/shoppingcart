import React from 'react';
import './switch.css';
const Switch = ({checked = false, onChange }) => {
  return (
    <div>

      <label className="switch">
        <input type="checkbox" id="togBtn" checked={checked} onChange={onChange}/>
        <div className="slider round">
          <span className="on">Enable</span>
          <span className="off">NA</span>
        </div>
      </label>
    </div>

  );
};

export default Switch;