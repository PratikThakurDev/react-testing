import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2 data-testid="count">Count: {count}</h2>
            <button type="button" onClick={() => setCount(count + 1)}>
                +
            </button>
            <button type="button" onClick={() => (count > 0 ? setCount(count - 1) : null)}>
                -
            </button>
            <button type="button" onClick={() => setCount(0)}>
                reset
            </button>
        </div>
    );
}
