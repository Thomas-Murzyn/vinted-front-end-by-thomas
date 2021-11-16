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

  const [priceMax, setPriceMax] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <Header
        setUserId={setUserId}
        userId={userId}
        search={search}
        setSearch={setSearch}
        isConnect={isConnect}
        setIsConnect={setIsConnect}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
      />
      <Routes>
        <Route path="/payment" element={<Payment />} />
        <Route path="/offer/publish" element={<Publish />} />
        <Route
          path="/"
          element={
            <Home
              priceMax={priceMax}
              priceMin={priceMin}
              priceFilter={priceFilter}
              search={search}
            />
          }
        />
        <Route path="/offer/:id" element={<Offer isConnect={isConnect} />} />
        <Route
          path="/signup"
          element={
            <SignUp
              setUserId={setUserId}
              userId={userId}
              isConnect={isConnect}
              setIsConnect={setIsConnect}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LogIn
              setUserId={setUserId}
              userId={userId}
              isConnect={isConnect}
              setIsConnect={setIsConnect}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
