import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import ToDo from '../ToDo/ToDo'

const ToDoLists = () => {
    const items = useSelector(state => state.todos.items)
    const status = useSelector(state => state.todos.status)
    console.log(items)
    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">

                {/*  <li className="completed">
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>Learn JavaScript</label>
                        <button className="destroy"></button>
                    </div>
                </li>
                <li>
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>Learn React</label>
                        <button className="destroy"></button>
                    </div>
                </li>
                <li>
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>Have a life!</label>
                        <button className="destroy"></button>
                    </div>
                </li>*/}
                {
                    status === "all" ? items.map((item, index) => {
                        return <ToDo key={index} item={item} />
                    }) : status === "completed" ? items.filter((item) => item.isComplated === true).map((item, index) => {
                        return <ToDo key={index} item={item} />
                    }) : items.filter((item) => item.isComplated === false).map((item, index) => {
                        return <ToDo key={index} item={item} />
                    })
                }
            </ul>
        </section>
    )
}

export default memo(ToDoLists)