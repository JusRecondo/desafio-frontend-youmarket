import './styles/globals.scss';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Awards from './pages/awards/Awards';
import Acredit from './pages/acredit/Acredit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/acredit" element={<Acredit />} />
      </Routes>
    </div>
  );
}

export default App;
