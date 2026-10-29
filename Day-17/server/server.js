// NEW: Start the HTTP server
require("dotenv").config();

const app = require("../App/app");

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});