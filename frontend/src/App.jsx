import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import Footer from "./Component/Footer";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/jobs" element={<Jobs />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;