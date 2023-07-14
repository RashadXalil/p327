import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { deleteToDo, editToDo, toggleIsComplated } from '../../redux/todoSlice/todoSlice'

const ToDo = ({ item }) => {
    console.log(`todo - ${item.value}`)
    const dispath = useDispatch()
    return (
        <li className={item.isComplated ? "completed" : ""} >
            <div className="view">
                <input className="toggle" type="checkbox" onClick={() => {
                    dispath(toggleIsComplated(item.id))
                }} />
                <label onClick={() => {
                    const value = prompt("value:")
                    const payload = {
                        id: item.id,
                        value: value
                    }
                    dispath(editToDo(payload))
                }}>{item.value}</label>
                <button className="destroy" onClick={() => {
                    dispath(deleteToDo(item.id))
                }}></button>
            </div>
        </li>
    )
}

export default memo(ToDo)