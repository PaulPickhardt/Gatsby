import React from "react";

export default props => {
  if (props && props.pictures) {
    return (
      <div>
        {props.pictures.map(picture => {
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
