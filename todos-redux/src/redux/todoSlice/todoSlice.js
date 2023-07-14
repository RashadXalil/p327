import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        status: "all"
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: uuid(),
                value: action.payload,
                isComplated: false
            })
        },
        deleteToDo: (state, action) => {
            const target = state.items.find(item => item.id === action.payload)
            const indexOfTarget = state.items.indexOf(target)
            state.items.splice(indexOfTarget, 1)
        },
        toggleIsComplated: (state, action) => {
            const target = state.items.find(item => item.id === action.payload)
            target.isComplated = !target.isComplated
        },
        clearCompleted: (state, action) => {
            state.items = state.items.filter(item => !item.isComplated)
        },
        editToDo: (state, action) => {
            console.log(action.payload)
            let target = state.items.find(item => item.id === action.payload.id)
            let indexOfTarget = state.items.indexOf(target)
            target = {
                id: target.id,
                value: action.payload.value,
                isComplated: target.isComplated
            }
            state.items.splice(indexOfTarget, 1, target)
        },
        changeActiveStatus: (state, action) => {
            state.status = action.payload
        }

    }
})
export const { addTodo, deleteToDo, toggleIsComplated, clearCompleted, editToDo, changeActiveStatus } = todoSlice.actions
export default todoSlice.reducer