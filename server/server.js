const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// Alustetaan lista toimituksista
let deliveries = [
  { id: 1, delivery_name: "Package A", status: "pending", distance_km: 5 },
  { id: 2, delivery_name: "Package B", status: "delivered", distance_km: 12 },
];

app.get("/deliveries", (req, res) => {
  res.json(deliveries);
});

app.listen(5000, () => console.log("Server running on port 5000"));
