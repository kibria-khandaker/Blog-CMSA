import { Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Blogs from "./components/Pages/Blogs/Blogs";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Notfound from "./components/Common/Notfound";
import AllBlogList from './components/Dashboard/DashboardPages/AllBlogList';
import AddBlog from './components/Dashboard/DashboardPages/AddBlog';
import BlogSport from "./components/Pages/Blogs/BlogSport";
import BlogTour from "./components/Pages/Blogs/BlogTour";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/blogs' element={<Blogs />} ></Route>
        <Route path='/BlogSport' element={<BlogSport />} ></Route>
        <Route path='/BlogTour' element={<BlogTour />} ></Route>

        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='AddBlog' element={<AddBlog />} ></Route>
          <Route path='AllBlogList' element={<AllBlogList />} ></Route>
        </Route>

        <Route path='*' element={<Notfound />} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
