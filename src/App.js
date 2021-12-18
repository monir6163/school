import { Routes, Route } from "react-router-dom";
import Header from "./Components/Shared/Header/Header";
import Home from "./Components/Home/Home";
import Notiche from "./Components/Notiche/Notiche";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/notich" element={<Notiche />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
