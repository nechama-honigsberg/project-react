import React, { useState, useEffect } from "react";

export default function UseEffect(props) {

    const [counter, setCounter] = useState(props.num);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(counter - 1)
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    })

    useEffect(() => {
        if (counter === 0)
            props.setIsShowComponent(false)
    }, [counter])

    useEffect(() => {
        setCounter(props.num)
    }, [props.num])

    
    const [title, setTitle] = useState(document.title);

    useEffect(function chengeTitel() {
        document.title = title;
    }, [title])




    return (
        <>
            <h2> {title}</h2 >
            <input type="text" onChange={(e) => (setTitle(e.target.value))}></input>
            <h2>Counter {counter}</h2>
        </>
    )
}
