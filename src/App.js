import logo from './logo.svg';
import './App.css';
import CreateOrder from './components/CreateOrder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import Delete from './components/Delete';
import Update from './components/Update';
import Sign from './pages/Sign';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/' element={<Sign />} />
        <Route path='/create-order' element={<CreateOrder />} />
        <Route path='/delete/:id' element={<Delete />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
