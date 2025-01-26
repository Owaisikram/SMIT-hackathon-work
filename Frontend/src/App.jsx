import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>

    </>
  );
}

export default App;
