import React, { useContext, useState } from "react";
import { createContext } from "react";

export const Context = createContext()

export const ContextProvider = (props) => {
    const [inWhich, setInWhich] = useState(0)
    const [input, setInput] = useState('')
    const [value, setValue] = useState([])
    const [pending, setPending] = useState([])
    const [completed, setCompleted] = useState([])
    const [inProgress, setInProgress] = useState([])

    function showInput() { 
        setValue(prev=>[...prev, input])
        setInput('')
    }
    const contextValue = {
        setInput,
        input,
        showInput,
        value, 
        setValue,
        completed,
        setCompleted,
        pending,
        setPending,
        inProgress,
        setInProgress
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}