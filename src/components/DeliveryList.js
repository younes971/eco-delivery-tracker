function DeliveryList({ deliveries, onStatusChange }) {
  const CO2_PER_KM = 0.2;

  return (
    <>
      {deliveries.map((d) => {
        const co2 = d.distance_km * CO2_PER_KM;

        return (
          <div key={d.id} style={{ marginBottom: "10px" }}>
            <strong>{d.delivery_name}</strong> – {d.distance_km} km –{" "}
            {co2.toFixed(1)} kg CO₂
            <select
              value={d.status}
              onChange={(e) => onStatusChange(d.id, e.target.value)}
              style={{ marginLeft: "10px" }}
            >
              <option value="pending">Pending</option>
              <option value="in_transit">In Transit</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        );
      })}
    </>
  );
}

export default DeliveryList;
