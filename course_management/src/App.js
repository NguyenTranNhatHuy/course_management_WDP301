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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfileUser />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
