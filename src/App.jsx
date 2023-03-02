import './styles/globals.scss';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Awards from './pages/awards/Awards';
import Acredit from './pages/acredit/Acredit';
import Movements from './pages/movements/Movements';
import Settings from './pages/settings/Settings';
import { AuthProvider } from './context/AuthContext';
import RequireAuth from './components/requireAuth/RequireAuth';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/awards" element={<RequireAuth><Awards /></RequireAuth>} />
          <Route path="/acredit" element={<RequireAuth><Acredit /></RequireAuth>} />
          <Route path="/movements" element={<RequireAuth><Movements /></RequireAuth>} />
          <Route path="/settings" element={<RequireAuth><Settings /></RequireAuth>} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
