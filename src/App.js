import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Shared/Navbar';
import Home from './components/Pages/Home';
import ToDoList from './components/Pages/ToDoList';
import CompletedTasks from './components/Pages/CompletedTasks';
import Calender from './components/Pages/Calender';
import About from './components/Pages/About';
import Footer from './components/Shared/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateWork from './components/Pages/UpdateWork';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/completedtasks" element={<CompletedTasks />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/about" element={<About />} />
        <Route path="/update/:id" element={<UpdateWork></UpdateWork>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
