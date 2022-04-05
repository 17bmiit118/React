import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteSate = (props) => {

    const [state,setState] = useState({
        "name":'ABC',
        "age":25
    });

    const updateState = () => {
        setState({
            "name":'XYZ',
            "age":30
        });
    }

    return (
        <noteContext.Provider value={{state,updateState}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteSate;