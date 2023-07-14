import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const counter = useSelector(state => state.counter.value)
    return (
        <div>Header counter:{counter}</div>
    )
}

export default Header