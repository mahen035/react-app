import { useContext } from "react";
import React from 'react';
import { UserContext } from "./Component1";

function Component4() {
    const user = useContext(UserContext)
    return (
        <div>
            <h2>Component4</h2>
            <h2>Hello {user} Again!</h2>
        </div>
    );
}

export default Component4;