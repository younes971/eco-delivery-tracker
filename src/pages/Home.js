import { useState } from "react";

function Home() {
  // state: lista toimituksista
  const [deliveries, setDeliveries] = useState([
    { id: 1, delivery_name: "Package A", status: "waiting" },
    { id: 2, delivery_name: "Package B", status: "delivered" },
  ]);

  return (
    <>
      <h2>Deliveries</h2>
      {deliveries.map((d) => (
        <p key={d.id}>
          {d.delivery_name} – {d.status}
        </p>
      ))}
    </>
  );
}

export default Home;

