import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';

import { ProtectedRoute } from './components/protectedRoute';
import Admin from './pages/Admin';
import Sign from './pages/Sign';
import { useEffect, useState } from 'react';
import { auth } from './pages/Auth';
import OrdCreate from './OrdCreate';
import OrdEdit from './OrdEdit';

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
          <Route path='/order/create' element={<OrdCreate />}></Route>

          <Route path='/order/edit/:empid' element={<OrdEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
