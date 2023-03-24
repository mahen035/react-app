import React from 'react';
import UserA from './UserA';
import UserB from './UserB';

const components = {
    usera: UserA,
    userb: UserB
}

function DynamicComponent(props) {
    const SelectUser = components[props.user]
    return (
        <SelectUser />
    );
}

export default DynamicComponent;