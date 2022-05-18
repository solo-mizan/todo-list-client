import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/home' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
