import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importando Components:
import Header from "./components/Header/Header";

// Importando Pages:
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import Instructors from "./pages/Instructors/Instructors";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";

// Importando CSS:
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="containerMain">
        <BrowserRouter>
          <Header />
          <Home />
          <About />
          <Courses />
          <Instructors />
          <Contact />
          <Footer />
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
