import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const Context = createContext()

export const ContextProvider = (props) => {
    const [inWhich, setInWhich] = useState(0)

    function readArray(key) {
        try {
            const raw = localStorage.getItem(key)
            const parsed = raw ? JSON.parse(raw) : []
            return Array.isArray(parsed) ? parsed : []
        } catch {
            return []
        }
    }
    function readString(key) {
        try {
            const raw = localStorage.getItem(key)
            const parsed = raw ? JSON.parse(raw) : ''
            return typeof parsed === 'string' ? parsed : ''
        } catch {
            return ''
        }
    }

    const [input, setInput] = useState(() => readString('tm_input'))
    const [value, setValue] = useState([])
    const [pending, setPending] = useState(() => readArray('tm_pending'))
    const [completed, setCompleted] = useState(() => readArray('tm_completed'))
    const [inProgress, setInProgress] = useState(() => readArray('tm_inProgress'))

    useEffect(() => {
        try { localStorage.setItem('tm_input', JSON.stringify(input)) } catch {}
    }, [input])
    useEffect(() => {
        try { localStorage.setItem('tm_pending', JSON.stringify(pending)) } catch {}
    }, [pending])
    useEffect(() => {
        try { localStorage.setItem('tm_completed', JSON.stringify(completed)) } catch {}
    }, [completed])
    useEffect(() => {
        try { localStorage.setItem('tm_inProgress', JSON.stringify(inProgress)) } catch {}
    }, [inProgress])

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