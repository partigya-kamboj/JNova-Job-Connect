import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import Footer from "./Component/Footer";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import ForgetPassword from "./Pages/ForgetPassword";
import CompanyDashboard from "./Pages/CompanyDashbard";
import PostJob from "./Pages/PostJob";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/jobs" element={<Jobs />} />
         <Route path ="/about" element={<About/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path= "/forgot-password"  element={<ForgetPassword/>}/>
         <Route path="/companydashboard" element={<CompanyDashboard/>}/>
         <Route path="/post-job" element={<PostJob/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;