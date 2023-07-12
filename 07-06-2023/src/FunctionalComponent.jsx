import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FunctionalComponent = (props) => {
    const [counter, setCounter] = useState(1)
    const [data, setData] = useState([])
    const [secountCounter, setSecondCounter] = useState(0)
    useEffect(() => {
        console.log("mount/update")

        return () => {
            console.log("unmounted")
        }
    }, [counter])
    return (
        <div>
            <button onClick={() => {
                setCounter(counter => counter + 1)
            }}>increase 1</button>
            <button onClick={() => {
                setSecondCounter(secountCounter => secountCounter + 1)
            }}>increase 2</button>
            <p>{counter}</p>
            <p>{secountCounter}</p>
            <ul>
                {
                    data.map((item, index) => {
                        return <li key={index}>{item.name}</li>
                    })
                }
            </ul>
            <button onClick={() => {
                setCounter(counter => counter - 1)
            }}>decrease 1</button>
            <button onClick={() => {
                setSecondCounter(secountCounter => secountCounter - 1)
            }}>decrease 2</button>
        </div>
    )
}

export default FunctionalComponent