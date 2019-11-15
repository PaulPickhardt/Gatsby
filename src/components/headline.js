import React from "react";

export default props => {
  if (props && props.data) {
    const html = { __html: props.data };
    return <div dangerouslySetInnerHTML={html}/>;
  } else {
    return <h1>Something went worng!</h1>;
  }
};
