import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddDelivery from "./pages/AddDelivery";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddDelivery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
