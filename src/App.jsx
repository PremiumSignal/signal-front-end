import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./loginComponents/Login";
import Header from "./loginComponents/Header";
import Register from "./loginComponents/Register";
import HomeHeader from "./loginComponents/HomeHeader";
import { useState } from "react";
import Home from "./components/Home";
import JoinOurCommunity from "./components/JoinOurCommunity";
import PremiumContent from "./components/PremiumContent";
import Footer from "./loginComponents/Footer";

function App() {
  const [islonIn, setIsLonIn] = useState(false);
  function Logged() {
    setIsLonIn((prev) => !prev);
  }
  return (
    <>
      <header>{!islonIn ? <Header /> : <HomeHeader />}</header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/join-our-community" element={<JoinOurCommunity />} />
          <Route
            path="/premium-content"
            element={islonIn ? <PremiumContent /> : <Navigate to="/login" />}
          />
          <Route path="/logout" element={<Home logout={Logged} />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
