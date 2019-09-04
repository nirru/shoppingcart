import React from 'react';
import './switch.css';
import PropTypes from 'prop-types';

const MyCheckbox = ({checked = false, onChange }) => (
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

MyCheckbox.propTypes = {
  // name:     PropTypes.string.isRequired,
  checked:  PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default MyCheckbox;
