import { useState } from "react";

function AddDelivery({ deliveries, setDeliveries }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("waiting");

  const handleSubmit = (e) => {
    e.preventDefault();

    setDeliveries([...deliveries, { name, status }]);

    setName("");
    setStatus("waiting");
  };

  return (
    <div>
      <h2>Add Delivery</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Delivery name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Status:</label>
          <br />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="waiting">waiting</option>
            <option value="delivered">delivered</option>
          </select>
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddDelivery;
