import React from "react";

export default props => {
  if (props && props.headline) {
    return (
      <div>
        <h1>{props.headline}</h1>
      </div>
    );
  } else {
    return <h1>Something went worng!</h1>;
  }
};
