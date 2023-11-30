import React, { useState } from 'react';


function SelectAbleList() {
    const items = ["one", "two", "three", "four"];
    const [selectedItems, setSelectedItems] = useState([]);

    // function selectItem1(e) {
    //     const checked = e.target.checked;
    //     const item = e.target.parentElement.textContent;
    //     if (checked) {
    //         selectedItems.push(item);
    //     } else {
    //         const itemIndex = selectedItems.findIndex(x => x === item);
    //         selectedItems.splice(itemIndex, 1);
    //     }
    //     setSelectedItems(selectedItems);
    // }

    function selectItem(checked, item) {
        if (checked) {
            // setSelectedItems(items => items.concat([item]));
            setSelectedItems([...selectedItems, item]);
        } else {
            setSelectedItems(items => items.filter(x => x !== item));
        }
    }


    return (
        <>
            <p>Selected Itmes: {selectedItems.join(", ")}</p>
            <div>
                <ul>
                    {items.map(item => (
                        <li key={item} style={{ direction: "rtl" }}>
                            <label>
                                {item}
                                <input
                                    type="checkbox"
                                    onChange={(e) => selectItem(e.target.checked, item)}
                                    //'onChange'  הוא אובייקט אירוע המייצג את האירוע שהפעיל  ה-'e' 
                                    // במקרה זה, זהו אובייקט האירוע משויך לשינוי במצב תיבת הסימון
                                    // e.target refers to the HTML element that triggered the event, in this case, the checkbox input element.
                                    // e.target.checked retrieves the current state of the checkbox. It will be true if the checkbox is checked and false if it's unchecked.
                                    checked={selectedItems.includes(item)}
                                    //  אם הפריט נמצא במערך הפריטים שנבחר, תיבת הסימון תסומן אחרת, זה לא יהיה מסומן
                                />
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );

}

export default SelectAbleList;