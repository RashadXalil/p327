import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveStatus, clearCompleted } from '../../redux/todoSlice/todoSlice'

const ToDoFooter = () => {
    const items = useSelector(state => state.todos.items)
    const status = useSelector(state => state.todos.status)
    const dispath = useDispatch()
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{items.length} </strong>
                items left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" className={status === "all" ? "selected" : ""} onClick={(e) => {
                        e.preventDefault()
                        dispath(changeActiveStatus("all"))
                    }}>All</a>
                </li>
                <li>
                    <a href="#/" className={status === "active" ? "selected" : ""} onClick={(e) => {
                        e.preventDefault()
                        dispath(changeActiveStatus("active"))
                    }}>Active</a>
                </li>
                <li>
                    <a href="#/" className={status === "completed" ? "selected" : ""} onClick={(e) => {
                        e.preventDefault()
                        dispath(changeActiveStatus("completed"))
                    }}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={() => {
                dispath(clearCompleted())
            }}>
                Clear completed
            </button>
        </footer>
    )
}

export default ToDoFooter