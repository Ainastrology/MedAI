import React, { useState } from 'react';
import axios from 'axios';
import { model, generationConfig, safetySettings } from './gemini';

function run() {
  const [uploadImage, setUploadImage] = useState(null);
  const [responseText, setResponseText] = useState('');

  const systemPrompt = `
    As a highly skilled medical practitioner specializing in image analysis, you are tasked with examining the medical images for a renowned hospital...
  `;

  const handleImageUpload = (event) => {
    setUploadImage(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (uploadImage) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const imageData = reader.result.split(',')[1]; // Get Base64 data

        const imagePart = {
          inline_data: {
            mime_type: uploadImage.type,
            data: imageData,
          },
        };

        const promptPart = {
          text: systemPrompt,
        };

        const promptParts = {
          parts: [promptPart, imagePart],
        };

        try {
          const response = await axios.post('YOUR_API_ENDPOINT', promptParts);
          setResponseText(response.data.text);
        } catch (error) {
          console.error('Error generating content:', error);
          setResponseText('An error occurred. Please try again.');
        }
      };

      reader.readAsDataURL(uploadImage);
    } else {
      setResponseText('Please upload an image.');
    }
  };

  return (
    <div>
      <h1>Medical Image Analysis</h1>
      <input type="file" onChange={handleImageUpload} />
      <button onClick={handleSubmit}>Submit</button>
      {responseText && <p>{responseText}</p>}
    </div>
  );
}

export default run;
