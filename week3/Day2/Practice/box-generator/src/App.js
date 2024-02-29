import React , {useState} from 'react'

import Displaybox from './components/Displaybox';
import Boxform from './components/Boxform';
import './App.css';


const App = () => {

  const [color, setColor] = useState ([]);
  const addcolor = (newColor) => 
  setColor ([...color , newColor])
  return (
    <>
      <Boxform addcolor = {addcolor} />
      <Displaybox color={color}/>
    </>
    
  );
}

export default App;
