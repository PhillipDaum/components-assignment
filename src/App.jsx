import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Nav />
      <main className="main-content">
        <h1>hello world</h1>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
