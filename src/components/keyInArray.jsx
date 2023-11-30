import React, { useState } from 'react';


function ItemList(props) {
    const [activeItems, setActiveItem] = useState(props.item);
    const [selectItem, setSelectItem] = useState([]);

    function reset() {
        setActiveItem(props.item)
        setSelectItem([])
    }

    function deleteSelectedItems() {
        setActiveItem(activeItems.filter(x => !selectItem.includes(x)))
    }

    function toggelItem(addOrRemove, item) {
        if (addOrRemove) {
            setSelectItem([...selectItem, item])
        } else {
            setSelectItem(selectItem.filter(x => x != item))
        }
    }

    return (
        <>
            <button onClick={deleteSelectedItems}>Delete</button>
            <button onClick={reset}>Reset</button>
            <ul>
                {
                    activeItems.map((item) => (
                        <li key={item}>
                            <label>
                                <input type="checkbox"
                                    onChange={(e) => toggelItem(e.target.checked, item)}
                                    checked={selectItem.includes(item)}
                                    >
                                </input>

                                {item}
                            </label>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default function AppItemList() {
    const item = ["one", "two", "three", "four", "five"]

    return (
        <>
            <ItemList item={item}></ItemList>
        </>
    )
}