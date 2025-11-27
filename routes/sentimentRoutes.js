import express from "express";
import multer from "multer";
import fetch from "node-fetch";
import fs from "fs";
import FormData from "form-data";

const router = express.Router();
const upload = multer({ dest: "uploads/" });


const PYTHON_API = "https://pyhton-ml-api-production.up.railway.app";

router.post("/predict", async (req, res) => {
  try {
    const { text } = req.body;

    const response = await fetch(`${PYTHON_API}/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// ============ 🔥 CSV PREDICT ============

router.post("/predict-csv", upload.single("file"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No CSV uploaded" });

  try {
    const fileStream = req.file;

    const formData = new FormData();
    formData.append("file", fs.createReadStream(fileStream.path), {
      filename: fileStream.originalname,
      contentType: "text/csv",
    });

    const response = await fetch(`${PYTHON_API}/predict-csv`, {
      method: "POST",
      body: formData,
      headers: formData.getHeaders(),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("CSV ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});


export default router;
