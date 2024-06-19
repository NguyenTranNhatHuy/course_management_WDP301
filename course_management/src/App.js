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
import Register from './components/Register';
import AccountManage from './components/admin/AccountManage';
import CollectionManage from './components/admin/CollectionManage';
import QuestionManage from './components/admin/QuestionManage';

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
            <Route path="/register" element={<Register />} />
            <Route path="/admin/accountManage" element={<AccountManage />} />
            <Route path="/admin/collectionManage" element={<CollectionManage />} />
            <Route path="/admin/questionManage" element={<QuestionManage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
