import { useState } from 'react'
import Tabs from './components/Tabs'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const[allTabs, setAllTabs]= useState([
    {label :"Tab 1",content:"Tab 1 content"},
    {label :"Tab 2",content:"Tab 2 content"},
    {label :"Tab 3",content:"Tab 3 content"}
  ])
  return(
    <div className="mx-auto"style={{width:500}}>
      <Tabs allTabs={allTabs} setAllTabs={setAllTabs}/>
    </div>
  );
}

export default App;
