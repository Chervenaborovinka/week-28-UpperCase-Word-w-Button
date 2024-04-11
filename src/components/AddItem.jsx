import React from "react";

export default function AddItem({newItem, setNewItem, addItem}) {
    return (
        <form>
            <input
                type="text"
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button type="submit" onClick={addItem}>Add</button>
            <p>{newItem}</p>
        </form>
    );
}