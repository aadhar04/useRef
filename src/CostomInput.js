import React from "react";

const CostomInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

export default CostomInput;
