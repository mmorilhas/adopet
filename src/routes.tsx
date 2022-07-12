import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';
import PaginaPadrao from './components/PaginaPadrao';
import Inicio from './pages/Inicio';

export default function AppRouter() {
  return (
    <main className={'container'}>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao/>} >
            <Route index  element={<Inicio />}/>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}