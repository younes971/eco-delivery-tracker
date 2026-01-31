import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import AddDelivery from "./pages/AddDelivery";
import About from "./pages/About";

function App() {
  const [deliveries, setDeliveries] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home deliveries={deliveries} />} />
        <Route
          path="/add"
          element={
            <AddDelivery
              deliveries={deliveries}
              setDeliveries={setDeliveries}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
