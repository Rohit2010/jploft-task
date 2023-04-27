import { useState } from 'react';
import './App.css';
import { isValid } from './utils/validation';
import { createPattern } from './utils/createPattern';

function App() {
  const [name, setName] = useState('')
  const [pattern, setPattern] = useState('')
  const onSubmit =() => {
      setPattern(createPattern(name))
  }
  return (
    <div className="App">
      <div className='card'>
        <h2>Print name in increasing breaking pattern</h2>
        <div>
        <input className='input_field' name='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={() => onSubmit()} disabled={!isValid(name)}>Print</button>
        </div>

        {!isValid(name) && <span>name is not valid</span>}
        <p>{pattern}</p>
      </div>
    </div>
  );
}

export default App;
