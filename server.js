import express from "express";
import cors from "cors";
import sentimentRoutes from "./routes/sentimentRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", sentimentRoutes);

// Railway PORT fix
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Node.js running on port ${PORT}`);
});
