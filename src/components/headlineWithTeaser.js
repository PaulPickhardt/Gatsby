import React, { Fragment } from "react";

export default props => {
  if (props && props.headline && props.textBlock) {
    console.log(props);
    const headline = { __html: props.headline };
    const textBlock = { __html: props.textBlock };
    return (
      <Fragment>
        <h1 dangerouslySetInnerHTML={headline} />
        <div dangerouslySetInnerHTML={textBlock} />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <h1>TestHeadline</h1>
        <div>TestBlock</div>
      </Fragment>
    );
  }
};
