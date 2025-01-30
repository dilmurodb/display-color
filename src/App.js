import './App.css';
import DisplayBox from './components/DisplayBox';
import InputBox from './components/InputBox';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState('green')

  return (
    <div className="App">
      <DisplayBox color={color}/>
      <InputBox />
    </div>
  );
}

export default App;
