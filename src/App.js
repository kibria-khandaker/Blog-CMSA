import { Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Blogs from "./components/Pages/Blogs/Blogs";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/blogs' element={<Blogs />} ></Route>
        <Route path='/dashboard' element={<Dashboard />} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
