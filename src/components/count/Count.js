import React from 'react';
//components 只需要引入一个react就行
const Count = (props) => {
    let {number,addClick}=props;
    return (
        <div>
            <div >{number.connt}</div>
            <div onClick={addClick}>+</div>
        </div>
    )
}



export default Count;