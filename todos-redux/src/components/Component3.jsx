import React from 'react'
import { memo } from 'react'
const Component3 = () => {
    return (
        <div className='comp-3' onClick={(e) => {
            e.stopPropagation()
            console.log("comp 3 click olundu")
        }}>Component3</div>
    )
}

export default memo(Component3)