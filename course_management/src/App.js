// Hooks import
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import "react-toastify/dist/ReactToastify.css";

// Libs import
import { ToastContainer } from 'react-toastify';

// Pages import
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/pages/HomePage';
import Login from './components/pages/LoginPage';
import Register from './components/pages/RegisterPage';
import ProfileUser from './components/pages/ProfilePage';
import CoursesPage from './components/pages/CoursesPage';
import CourseDetail from './components/pages/CourseDetailPage';
import Breadcrumb from './components/layouts/Breadcrumb';
import MyCoursesPage from './components/pages/MyCoursesPage';
import CreateCourse from './components/pages/CreateCourse';

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
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/myCourses" element={<MyCoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/courses/detailTest" element={<CourseDetail />} />
            <Route path="/br" element={<Breadcrumb />} />
            <Route path="/createCourse" element={<CreateCourse />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
