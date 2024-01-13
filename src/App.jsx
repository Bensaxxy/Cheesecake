import { useRef } from "react";
import Header from "./components/Header/Header";
import LoveChesse from "./components/loveCheese/LoveChesse";
import Menu from "./components/Menu/Menu";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div>
      <div className="background-img">
        <Header />

        <Hero />
      </div>
      <LoveChesse />
      <Menu />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
