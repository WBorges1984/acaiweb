import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/dashboard.jsx'
import Login from './pages/login/login.jsx';
// import Footer from './components/footer/footer.jsx';
import EsqueciSenha from './pages/esqueciSenha/esqueciSenha.jsx';
import Register from './pages/register/register.jsx';
import Cardapio from './pages/cardapio/Cardapio.jsx';
import Checkout from './pages/checkOut/Checkout.jsx';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div className=''>
      <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/cardapio' element={<Cardapio/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/esquecisenha' element={<EsqueciSenha/>}/>
      </Routes>
      </div>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
