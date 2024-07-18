const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const analysisSchema = new mongoose.Schema({
  extractedText: String,
  userInputText: String,
  analysis: String,
});

const Analysis = mongoose.model('Analysis', analysisSchema);

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/api/analyze', async (req, res) => {
  const { extractedText, userInputText, analysis } = req.body;

  try {
    const newAnalysis = new Analysis({
      extractedText,
      userInputText,
      analysis,
    });

    const savedAnalysis = await newAnalysis.save();
    res.json(savedAnalysis);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
