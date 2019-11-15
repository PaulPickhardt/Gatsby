import React from "react";

export default props => {
  if (props && props.data) {
    console.log(props.data);
    const pictures = props.data.split("\n");
    console.log(pictures);
    return (
      <div>
        {pictures &&
          pictures.map(pic => {
            return (
              <div>
                <img src={pic} alt="something went wrong" />
              </div>
            );
          })}
        <img src="gatsby-astronaut.png" alt={"test"} />
      </div>
    );
  }
};
