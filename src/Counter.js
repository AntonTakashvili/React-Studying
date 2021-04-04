import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
            <button onClick={() => setCount((prev) => prev + 5)}>+1</button>
            <button onClick={() => setCount((prev) => prev + 100)}>+1</button>
            <button onClick={() => setCount((prev) => prev - 1)}>+1</button>
            <button onClick={() => setCount((prev) => prev - 5)}>+1</button>
            <button onClick={() => setCount((prev) => prev - 100)}>+1</button>

        </div>
    )
}
export default Counter;