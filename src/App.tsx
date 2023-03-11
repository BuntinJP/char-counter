import React from 'react';
import './App.css';
import Head from './components/Head';
import Counter from './components/Counter';

const App: React.FC = () => {
    return (
        <div className="App">
            <Head />
            <Counter />
        </div>
    );
};

export default App;
