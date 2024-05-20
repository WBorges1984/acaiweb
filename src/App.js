import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/dashboard.tsx'
import Login from './pages/login/login.tsx';
import Footer from './components/footer/footer.tsx';
import EsqueciSenha from './pages/esqueciSenha/esqueciSenha.tsx';
import Register from './pages/register/register.tsx';
import Cardapio from './pages/cardapio/Cardapio.tsx';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div className=''>
      <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/cardapio' element={<Cardapio/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/esquecisenha' element={<EsqueciSenha/>}/>
      </Routes>
      </div>
    </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
