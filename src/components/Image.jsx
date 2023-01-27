import React from 'react'

const Image = ({source}) => {

    return (
        <img
            src={source}
            onError={(e) =>
            (e.target.onerror = null)(
                (e.target.src =
                require("../assets/notfound.jpg"))
            )
        }
            alt=""
        />
    );
}

export default Image
