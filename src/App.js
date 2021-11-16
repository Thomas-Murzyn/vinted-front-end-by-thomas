import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [isConnect, setIsConnect] = useState(Cookies.get("token") || null);
  const [search, setSearch] = useState(null);
  const [priceFilter, setPriceFilter] = useState("asc");
  const [price, setPrice] = useState([0, 50]);

  return (
    <Router>
      <Header
        search={search}
        setSearch={setSearch}
        isConnect={isConnect}
        setIsConnect={setIsConnect}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
      />
      <Routes>
<<<<<<< HEAD
        <Route path="/payment" element={<Payment />} />
=======
>>>>>>> thomas-branch
        <Route path="/offer/publish" element={<Publish />} />
        <Route
          path="/"
          element={<Home priceFilter={priceFilter} search={search} />}
        />
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
