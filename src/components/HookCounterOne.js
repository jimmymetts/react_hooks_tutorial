import React, { useState } from 'react';

function HookCounterOne() {
const [count, setCount] = useState (0)

    return (
        <div>
            <button>Click</button>
            
        </div>
    )
}

export default HookCounterOne