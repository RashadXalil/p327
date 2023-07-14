import React from 'react'
import Component2 from './Component2'
import "./style.css"
import { memo } from 'react'
const Component1 = () => {
    return (
        <div className='comp-1' onClick={() => {
            console.log("comp-1 click olundu")
        }}>
            <Component2 />
        </div>
    )
}

export default memo(Component1)