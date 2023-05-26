import './App.css';
import { Home } from './pages/Home';
import Login from './pages/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Signup } from './pages/Signup';
import { UserAuthContextProvider } from './components/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';


const router = createBrowserRouter ([

  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/home",
    element: 
    <ProtectedRoute>
      <Home/>
    </ProtectedRoute> 
  },
  {
    path: "/signup",
    element: <Signup/>
  }
])

function App() {
  return (
    <div >
      <UserAuthContextProvider>
      <RouterProvider router={router}/>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
