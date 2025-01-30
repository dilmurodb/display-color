import './App.css';
import DisplayBox from './components/DisplayBox';
import InputBox from './components/InputBox';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState('')

  return (
    <div className="App">
      <DisplayBox color={color} />
      <InputBox color={color} setColor={setColor} />
    </div>
  );
}

export default App;
