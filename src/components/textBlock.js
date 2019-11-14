import React from "react";

export default props => {
    if (props && props.data) {
        return (
            <div>
                <p>{props.data}</p>
            </div>
        );
    } else {
        return <h1>Something went worng!</h1>;
    }
};