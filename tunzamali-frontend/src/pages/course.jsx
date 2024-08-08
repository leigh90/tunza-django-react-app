import React from 'react';

function ParentComponent() {
    return (
        <ChildComponent
            name="John Doe"
            age={25}
        />
    );
}
function ChildComponent({ name, age }) {
    return (
        <p>
            My name is {name} and I am {age} years old.
        </p>
    );
}


import React, { useState } from 'react';

function Counter() {
    // Use useState to manage the state of the counter
    const [count, setCount] = useState(0);

    // Function to increment the counter
    function handleIncrement() {
        setCount(count + 1);
    }
    
    return (
        <div>
            <p>The counter is at {count}.</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}