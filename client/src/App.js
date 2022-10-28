import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import { Home } from "./components/home/Home.js";
import { Catalog } from "./components/catalog/Catalog.js";
import { Login } from "./components/login/Login.js";
import { Register } from "./components/register/Register.js";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [auth, setAuth] = useLocalStorage('auth', {});

  const userLogin = (authData) => {
    setAuth(authData);
};

  return (
    <AuthContext.Provider value={{ user: auth, userLogin }}>
    <div className="App">
       <Navbar />
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routes>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
