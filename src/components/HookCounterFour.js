import React, {useState} from 'react'

function HookCounterFour() {

    // How to useState with arrays

    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, { 
            id: items.length, 
            value: Math.floor(Math.random() * 2) + 1
        }])
    }


    return (
        <div>
            <button onClick={addItem}>Add </button>
            <ul>
                {items.map(item => (
                    <li key={item.id}> {item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounterFour
