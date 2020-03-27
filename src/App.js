import React from 'react';
import logo from './logo.svg';
import './App.css';

import useFuse from './hooks/useFuse'

const customers = [
    {id: 1, name: 'Customer A', email: 'aa@aa.com'},
    {id: 2, name: 'Customer B', email: 'mm@mm.com'}
]

function App() {
    const options = {
        keys: ["name", "email"]
    }

    const { result, setTerm, term, reset } = useFuse(customers, options)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <input
                    onChange={e => setTerm(e.target.value)}
                    value={term}
                    placeholder="Search for a customer..."
                />

                <button onClick={reset}>Reset</button>

                {result.map((customer, k) => (
                    <div key={k}>
                        {customer.name} - {customer.email}
                    </div>
                ))}

                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
