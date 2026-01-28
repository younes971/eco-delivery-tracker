import { useState } from "react";
import DeliveryList from "../components/DeliveryList";

function Home() {
  const [deliveries, setDeliveries] = useState([
    { id: 1, delivery_name: "Package A", status: "pending", distance_km: 5 },
    { id: 2, delivery_name: "Package B", status: "delivered", distance_km: 12 },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setDeliveries(
      deliveries.map((d) => (d.id === id ? { ...d, status: newStatus } : d)),
    );
  };

  return (
    <>
      <h2>Deliveries</h2>
      <DeliveryList
        deliveries={deliveries}
        onStatusChange={handleStatusChange}
      />
    </>
  );
}

export default Home;
