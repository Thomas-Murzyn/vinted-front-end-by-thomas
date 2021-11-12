import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
// import RangePrice from "./components/RangePrice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [isConnect, setIsConnect] = useState(Cookies.get("token") || "");
  const [search, setSearch] = useState(null);
  const [priceFilter, setPriceFilter] = useState("price-asc");

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
        {/* <Route path="/range" element={<RangePrice />} /> */}
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
