import apps from "./app.js";
import cloudinary from "cloudinary";
// server.js

import express from 'express';
import fileUpload from 'express-fileupload';
import axios from 'axios';
import FormData from 'form-data'; // Add this import

const app = express();

app.use(fileUpload());
app.use(express.json());

app.post('/analyze', async (req, res) => {
  if (!req.files || !req.files.image) {
    return res.status(400).json({ error: 'No image uploaded' });
  }

  const image = req.files.image;

  try {
    const formData = new FormData();
    formData.append('image', image.data, { filename: image.name });

    const response = await axios.post('http://localhost:5001/analyze', formData, {
      headers: {
        ...formData.getHeaders(), // Include form-data headers
      },
    });

    res.json({ result: response.data.result });
  } catch (error) {
    console.error('Error during analysis:', error);
    res.status(500).json({ error: 'Error during analysis' });
  }
});



cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


apps.listen(process.env.PORT, ()=>{
    console.log(`Server listening at port ${process.env.PORT}`);
});