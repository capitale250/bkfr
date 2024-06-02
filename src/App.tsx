import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Page from './pages/tasks';
import Signin from './pages/SignIn';
import Register from './pages/register'
import Aprove from './pages/Aprove'
import Order from './pages/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/order" element={<Order />} />
      <Route path="/Aprove" element={<Aprove />} />
    </Routes>
    <ToastContainer
        autoClose={5000} 
        hideProgressBar 
      />
    </>
  );
}

export default App;
