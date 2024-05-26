import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfileUser from './components/ProfileUser';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <ToastContainer />
          <Routes>
            <Route path="/home" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<ProfileUser />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
