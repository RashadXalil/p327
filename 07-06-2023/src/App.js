import { useState } from 'react';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
    const [visible, setVisible] = useState(true)
    return (
        <div className="App">
            <button onClick={() => {
                setVisible(!visible)
            }}>dispay</button>
            {visible ? <FunctionalComponent /> : ""}
        </div>
    );
}

export default App;
