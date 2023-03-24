import React, {useState} from 'react';
import Child from './Child';
function MainComp(props) {
    const [ data, setData ] = useState('')

    const childToMain = (childData) => {
        setData(childData)
    }
    return (
        <div>
            { data }
            <div>
                <Child childToMain = {childToMain} />
            </div>
        </div>
    );
}

export default MainComp;