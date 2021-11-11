import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [isConnect, setIsConnect] = useState(Cookies.get("token") || "");
  return (
    <Router>
      <Header isConnect={isConnect} setIsConnect={setIsConnect} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route
          path="/signup"
          element={<SignUp isConnect={isConnect} setIsConnect={setIsConnect} />}
        />
        <Route
          path="/login"
          element={<LogIn isConnect={isConnect} setIsConnect={setIsConnect} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
