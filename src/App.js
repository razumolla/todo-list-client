import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        {/* <Route path="/" element={<Home />} />  */}
      </Routes>
    </div>
  );
}

export default App;
