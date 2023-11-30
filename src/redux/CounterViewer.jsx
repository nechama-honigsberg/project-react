import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterViewer() {
    const store = useSelector((store) => store)
    const usersList = useSelector((store) => store.users)
    return (
        <>
            <div>CounterViewer</div>
            <h1>The counter is : {store.counter}</h1>
            {usersList.map(user => <h2 key={user.id}>{user.name}</h2>) }
        </>
    )
}
