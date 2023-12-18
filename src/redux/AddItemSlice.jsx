import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from './itemSlice';

export default function AddItemSlice() {
    const dispatch = useDispatch();

    const clickAdditem = () => {
        dispatch(addItem({ id: 3, name: 'pencil' }))
    }
    return (
        <>
            <div>AddItemSlice</div>
            <button onClick={clickAdditem}>addItem</button>
        </>
    )
}
