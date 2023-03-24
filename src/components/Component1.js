import React, {useState, createContext} from 'react';
import Component2 from './Component2';

export const UserContext = createContext();

function Component1(props) {
    const[user, setUser] = useState("John Doe")
    return (
        <UserContext.Provider value={user}>
            <h2>Component1</h2>
            <h2>Hello {user}</h2>
            <Component2 user = {user} />
        </UserContext.Provider>
    );
}

export default Component1;