import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import Footer from "./Component/Footer";
import About from "./Pages/About";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/jobs" element={<Jobs />} />
         <Route path ="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;