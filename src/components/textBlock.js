import React from "react";

export default props => {
    if (props && props.text) {
        return (
            <div>
                <p>{props.text}</p>
            </div>
        );
    } else {
        return <h1>Something went worng!</h1>;
    }
};