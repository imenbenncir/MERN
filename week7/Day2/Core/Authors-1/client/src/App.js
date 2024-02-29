import Dashbord from './components/Dashbord';
import Create from './components/Create'
import Update from './components/Update';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/authors' element={<Dashbord/>} />
          <Route path="/authors/new" element={<Create />} />
          <Route path="/authors/:id/edit" element={<Update />} />
      </Routes>

    </div>
  );
}

export default App;
