import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function CounterChanger() {

    const dispach = useDispatch();
    const [input, setInput] = useState(0)

    const add = () => {
        dispach({ type: "PLUS", payload: input })
    }
    const minus = () => {
        dispach({ type: "MINUS", payload: input })
    }
    return (
        <>
            <h1>CounterChanger</h1>
            <input type="number" onChange={e => setInput(+e.target.value)} />
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={() => dispach({ type: "RESET" })}>RESET</button>

        </>
    )
}
