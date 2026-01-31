function Home({ deliveries }) {
  return (
    <div>
      <h2>Deliveries</h2>

      {deliveries.length === 0 ? (
        <p>No deliveries found</p>
      ) : (
        deliveries.map((delivery, index) => (
          <p key={index}>
            {delivery.name} – {delivery.status}
          </p>
        ))
      )}
    </div>
  );
}

export default Home;
