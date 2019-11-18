import React from "react";
import { useStaticQuery } from "gatsby";

export default props => {
  if (props && props.data) {
    const data = useStaticQuery(graphql`
      query MyQuery {
        allImageSharp {
          nodes {
            fluid {
              originalName
            }
          }
        }
      }
    `);
    console.log(data);
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
      </div>
    );
  }
};
