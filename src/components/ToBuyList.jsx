import React, { Component } from 'react';
import './ToBuyList.css';

export default class ToBuyList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: ["milk", "egg"],
            arr: [{ id: 1, name: "milk", price: 5 }],
            newItem: ""
        }
    }

    updateItem = (event) => {
        this.setState({ newItem: event.target.value });
    }

    addItem = () => {
        //שימוש במערך שלא ניתן לשינוי- imutiable
        //על כל שינוי ניצור מערך חדש

        // 1  --מעתיק את המערךslice
        // let newItems = this.state.items.slice();
        // 2 ...כמו slice
        // let newItems=[...this.state.items];
        // newItems.push(this.state.newItem);
        // this.setState({ items: newItems });

        //3 concat
        // מעתיק את כל המערך ומוסיף פריט חדש 
        this.setState({ items: this.state.items.concat(this.state.newItem) });
    }

    render() {
        return (
            <div>
                <input onChange={this.updateItem} />
                <button onClick={this.addItem}>add</button>
                {/* //מערך */}
                {this.state.items.map((item, index) => <li key={index} style={{ color: "red", backgroundColor: "white" }}>{item}</li>)}
                {/* //מערך אוביקטים-שימוש ב- למפתחID */}
                <div>
                    {this.state.arr.map(item => 
                    <ul key={item.id}>
                        <li  style={{ color: "red", backgroundColor: "white" }}>{item.name}</li>
                        <li  style={{ color: "red", backgroundColor: "white" }}>{item.price}</li>
                    </ul>
                    )}
                </div>
            </div>
        )
    }
}
