import React from "react";

export default props => {
  if (props && props.data) {
    return (
      <div>
        <h1>{props.data}</h1>
      </div>
    );
  } else {
    return <h1>Something went worng!</h1>;
  }
};
