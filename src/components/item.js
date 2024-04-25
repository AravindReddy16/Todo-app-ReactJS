import React from "react";

export default function Item({items, index, deleteItem, editItem}) {
    return (
        <div className="itembox">
            <div className="text">
                <p>{items}</p>
            </div>
            <div className="btns">
                <button onClick={() => editItem(items, index)} id="edit">Edit</button>
                <button onClick={() => deleteItem(index)} id="delete">Delete</button>
            </div>
        </div>
    )
}