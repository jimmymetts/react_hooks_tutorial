import React, {useState} from 'react'

function HookCounterThree() {

    const [name, setName] = useState({firstName:'', lastName: ''})

    return (

    <form>
        <input input='text' 
        value={name.firstName} 
        onChange={e => setName({firstName: e.target.value})} />

        <input input='text' 
        value={name.lastName} 
        onChange={e => setName({lastName: e.target.value})} />
        

    <h2>You first name is - {name.firstName}</h2>
    <h2>You first last is - {name.lastName}</h2>

    </form>
    )
}

export default HookCounterThree
