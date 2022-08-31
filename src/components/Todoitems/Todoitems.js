import React from 'react';
import './Todoitems.css';

const Todoitems = (props) => {
    const {items , deleteitem} = props;
    let length = items.length;
    const ItemList = length ? items.map(item => {
        return (
            <div key = {item.id} className = "todolist">
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span onClick = { () => deleteitem(item.id)}>&times;</span>
            </div>
        )
    }) :(
        <p> There is no items </p>
        )
    return (
        <div>
            {ItemList}
        </div>
    )
}

export default Todoitems