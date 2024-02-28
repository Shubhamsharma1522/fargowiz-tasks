import React from "react";

const Display = ({ input }) => {
  return (
    <div>
      <input type="text" className="display" value={input} readOnly />
    </div>
  );
};

export default Display;
