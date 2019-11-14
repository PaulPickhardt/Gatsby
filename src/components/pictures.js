import React from "react";

export default props => {
  if (props && props.data) {
    return (
      <div>
        {props.data.map(picture => {
          return (
            <div>
              <img src={picture} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <h1>Something went worng!</h1>;
  }
};
