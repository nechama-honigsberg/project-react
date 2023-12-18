import React from 'react'
import { useSelector } from 'react-redux'

export default function ShowItemsSlice() {
    const items = useSelector((state) => state.myItem.items)
  return (
    <>
    <h1>Show Items Slice</h1>
    {items.map(item => <h2 key={item.id}>{item.name}</h2>) }
    </>
  )
}
