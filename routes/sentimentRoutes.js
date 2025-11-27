import express from "express";
import multer from "multer";
import fetch from "node-fetch";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// URL API Python kamu di Railway (GANTI sesuai domain yang Python)
const PYTHON_API = "https://your-python-service.up.railway.app";
// contoh: https://sentimen-ai-production.up.railway.app

// ============ 🔥 MULTI-TEXT PREDICT ============
router.post("/predict", async (req, res) => {
  try {
    const { texts } = req.body; // array of text

    const response = await fetch(`${PYTHON_API}/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texts }),
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
    formData.append("file", fs.createReadStream(fileStream.path));

    const response = await fetch(`${PYTHON_API}/predict-csv`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("CSV ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
