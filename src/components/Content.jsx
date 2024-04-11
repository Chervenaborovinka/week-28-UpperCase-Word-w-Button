import React, { useState } from 'react';
import ListItem from "./ListItem";
import AddItem from "./AddItem";
import { useLocalStorage } from "react-use";

function Content() {
    const [items, setItems] = useLocalStorage("Списочек", []);
    const [newItem, setNewItem] = useState('');

    const deleteItem = (id) => {
        const updatedList = items.filter((item) => item.id !== id);
        setItems(updatedList);
    }

    const addItem = (e) => {
        e.preventDefault();
        setItems([...items, { id: items.length + 1, name: newItem }]);
    setNewItem('');
        console.log(newItem);
    }

    return (
        <main>
            <ul>
                {items.map((item) =>
                    <ListItem key={item.id} name={item.name} deleteItem={() => deleteItem(item.id)} />
                )}
            </ul>
            <AddItem newItem={newItem} setNewItem={setNewItem} addItem={addItem} />
        </main>
    );
}

export default Content;
