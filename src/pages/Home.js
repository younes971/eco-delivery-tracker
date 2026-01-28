import { useState, useEffect } from "react";
import DeliveryList from "../components/DeliveryList";

function Home() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/deliveries")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched deliveries:", data);
        setDeliveries(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setDeliveries(
      deliveries.map((d) => (d.id === id ? { ...d, status: newStatus } : d)),
    );
  };

  return (
    <>
      <h2>Deliveries</h2>

      {deliveries.length === 0 ? (
        <p>No deliveries found</p>
      ) : (
        <DeliveryList
          deliveries={deliveries}
          onStatusChange={handleStatusChange}
        />
      )}
    </>
  );
}

export default Home;
