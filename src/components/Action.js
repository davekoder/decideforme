import React from "react";

const Action = (props) => (
  <div>
    <button
      className='big-button'
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      Randomize & Choose from List
    </button>
  </div>
);

export default Action;
