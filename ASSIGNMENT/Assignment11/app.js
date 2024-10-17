const { useState, useEffect } = React;

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
       
    }, [count]); // Dependency array

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1> Counter{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
