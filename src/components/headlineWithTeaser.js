import React, { Fragment } from "react";

export default props => {
  if (props && props.data) {
    console.log(props.data);
    const str = props.data.toString();
    const data = JSON.parse(str.slice(3, str.length - 4));
    console.log(data);
    // const data = JSON.parse(props.data);
    const h1Text = data["headline"]["data"];
    const textFiled = data["text"]["data"];
    console.log(h1Text);
    console.log(textFiled);
    const h1 = { __html: h1Text };
    const text = { __html: textFiled };
    return (
      <Fragment>
        <h1 id="h1">{h1Text}</h1>
        <div id="text" dangerouslySetInnerHTML={text} />
      </Fragment>
    );
  } else {
    return <h1>Something went worng!</h1>;
  }
};
