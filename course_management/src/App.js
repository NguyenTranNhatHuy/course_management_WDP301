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
import CoursesPage from './components/CoursesPage';
import MyCoursesPage from './components/MyCoursesPage';
import CreateCourse from './components/CreateCourse';
import ViewAllQuestion from './components/ViewAllQuestion';
import FavoriteCourse from './components/FavoriteCourse'
import Deposit from './components/Deposit'
import AddByFile from './components/AddByFile'
import TestWithNoQuestion from './components/TestWithNoQuestion';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Result from './components/Result';
import { DataProvider } from './context/DataProvider';
import ExamList from './components/ExamList';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <DataProvider>

        <BrowserRouter>
          <Header />
          <ToastContainer />
          <Routes>
            <Route path="/home" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<ProfileUser />} />
            <Route path="/register" element={<Register />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/mycourses" element={<MyCoursesPage />} />
            <Route path="/createcourse" element={<CreateCourse />} />
            <Route path="/course/:id" element={<ViewAllQuestion />} />
            <Route path="/admin/accountManage" element={<AccountManage />} />
            <Route path="/admin/collectionManage" element={<CollectionManage />} />
            <Route path="/admin/questionManage" element={<QuestionManage />} />
            <Route path="/favorite" element={<FavoriteCourse />} /> 
            <Route path="/deposit" element={<Deposit />} /> 
            <Route path="/addbyfile" element={<AddByFile />} /> 
            <Route path="/test" element={<TestWithNoQuestion />} />
            <Route path="/result" element={<Result />} />
            <Route path="/examlist" element={<ExamList />} />

          </Routes>
          <Footer />
        </BrowserRouter>
        </DataProvider>

      </AuthProvider>
    </div>
  );
}

export default App;
