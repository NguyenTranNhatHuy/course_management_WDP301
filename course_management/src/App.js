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
import AddByFile from './components/AddByFile'
import DepositManage from './components/admin/DepositManage'
import Deposit from './components/DepositOption'
import DepositSuccess from './components/DepositSuccess'
import DepositCancel from './components/DepositCancel'
import TestWithNoQuestion from './components/TestWithNoQuestion';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import Result from './components/Result';
import { DataProvider } from './context/DataProvider';
import ExamList from './components/ExamList';
import ExamCheck from './components/ExamCheck';
import Test from './components/admin/Test';
import DetailCourse from './components/DetailCourse';
import MyEnrollment from './components/MyEnrollment'
import SendEmail from './components/SendEmail'
import MyExams from './components/MyExams';

function App() {
  return (
    <div className="App">
      <div className="se-pre-con" />
      <AuthProvider>
        <DataProvider>
          <BrowserRouter>
            <Header />
            <ToastContainer />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/home" exact element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<ProfileUser />} />
              <Route path="/register" element={<Register />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/mycourses" element={<MyCoursesPage />} />
              <Route path="/createcourse" element={<CreateCourse />} />
              {/* <Route path="/course/:id" element={<ViewAllQuestion />} /> */}
              <Route path="/admin/accountManage" element={<AccountManage />} />
              <Route path="/admin/collectionManage" element={<CollectionManage />} />
              <Route path="/admin/questionManage" element={<QuestionManage />} />
              <Route path="/favorite" element={<FavoriteCourse />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/addbyfile" element={<AddByFile />} />
              <Route path="/admin/depositManage" element={<DepositManage />} />
              <Route path="/depositSuccess" element={<DepositSuccess />} />
              <Route path="/depositCancel" element={<DepositCancel />} />
              <Route path="/test" element={<TestWithNoQuestion />} />
              <Route path="/result" element={<Result />} />
              <Route path="/examlist" element={<ExamList />} />
              <Route path="/exam-check/:collectionId" element={<ExamCheck />} />
              <Route path="/testcheat" element={<Test />} />
              <Route path="/course/:id" element={<DetailCourse />} />
              <Route path="/myEnrollment" element={<MyEnrollment />} />
              <Route path="/sendEmail" element={<SendEmail />} />
              <Route path="/myExam" element={<MyExams />} />
            </Routes>
            <Footer />
          </BrowserRouter>
          {/* <GPT/> */}
        </DataProvider>
      </AuthProvider>
    </div>
  );
}

export default App;