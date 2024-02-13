import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';

import { ProtectedRoute } from './components/protectedRoute';
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';
import Admin from './pages/Admin';
import Sign from './pages/Sign';
import { useEffect, useState } from 'react';
import { auth } from './pages/Auth';

function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    const notSignin = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        return;
      }
      setUser(null);
    });
    return () => notSignin();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sign />}></Route>
          <Route path='/admin' element={
            <ProtectedRoute user={user}>
              <Admin></Admin>
            </ProtectedRoute>
          }
          >
          </Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
