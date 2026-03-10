import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import AddDelivery from "./pages/AddDelivery";
import About from "./pages/About";

function App() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/deliveries")
      .then((res) => res.json())
      .then((data) => setDeliveries(data))
      .catch((error) => console.error("Error fetching deliveries:", error));
  }, []);

  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* Header */}
        <header
          style={{
            background: "#2c7a7b",
            padding: "15px",
            color: "white"
          }}
        >
          <h1>EcoDelivery Tracker</h1>
          <nav>
            <a href="#/" style={{ marginRight: "15px", color: "white" }}>
              Home
            </a>
            <a href="#/add" style={{ marginRight: "15px", color: "white" }}>
              Add Delivery
            </a>
            <a href="#/about" style={{ color: "white" }}>
              About
            </a>
          </nav>
        </header>

        {/* Main content */}
        <main style={{ flex: 1, padding: "20px" }}>
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
        </main>

        {/* Footer */}
        <footer
          style={{
            padding: "10px",
            background: "#eee",
            textAlign: "center"
          }}
        >
          EcoDelivery Tracker © 2026
        </footer>
      </div>
    </Router>
  );
}

export default App;