function Home({ deliveries }) {
  return (
    <div>
      <h2>Deliveries</h2>

      {deliveries.length === 0 ? (
        <p>No deliveries found</p>
      ) : (
        deliveries.map((delivery) => {
          const distance = delivery.distance_km;
          const co2 = (distance * 0.2).toFixed(1);

          return (
            <p key={delivery.id}>
              {delivery.delivery_name} – {distance} km – {co2} kg CO₂ –{" "}
              {delivery.status}
            </p>
          );
        })
      )}
    </div>
  );
}

export default Home;
