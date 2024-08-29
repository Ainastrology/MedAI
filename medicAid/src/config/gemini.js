
// /*
//  * Install the Generative AI SDK
//  *
//  * $ npm install @google/generative-ai
//  */
// import { GoogleAIFileManager } from "@google/generative-ai/server";
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai" ;
  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  // const fileManager = new GoogleAIFileManager(apiKey);

  // async function uploadToGemini(path, mimeType) {                   //Upload Image
  //   const uploadResult = await fileManager.uploadFile(path, {
  //     mimeType,
  //     displayName: path,
  //   });
  //   const file = uploadResult.file;
  //   console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
  //   return file;
  // }
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  
  const system_prompt = ` 
         As an AI specialized in medical and health-related information, your task is to analyze and respond to both text and image inputs related to medical health.

        Your responsibilities include:
        1. Text Analysis: When provided with a text input, generate a clear, concise, and medically accurate response. Focus on identifying symptoms, conditions, treatments, or relevant health information.
        2. Image Analysis: When provided with an image, analyze it within your trained capacity. Identify any visible medical issues or anomalies and provide an appropriate response or recommendation.
        3. Recommendations and Next Steps: Based on your analysis of the text or image, suggest potential next steps, such as further tests, treatments, or consulting a healthcare professional.
        4. Empathy and Support: Always respond with empathy, considering the user's emotional state and the sensitive nature of health-related information.

        Important Notes:
        1. Scope of Response: Limit your responses to medical health, wellness, and healthcare-related topics. Do not engage in non-medical discussions.
        2. Image Clarity: If an image is unclear or insufficient for analysis, note that certain aspects are 'Unable to be determined based on the provided image' and recommend professional evaluation.
        3. Ethical Considerations: Respect user privacy, avoid providing harmful advice, and maintain confidentiality in all responses.
        4. Disclaimer: Accompany all responses with the disclaimer: "This information is not a substitute for professional medical advice. Please consult a healthcare provider for any medical concerns."

        Your role is to provide reliable, empathetic, and medically sound guidance based on the text or image provided, while prioritizing user safety and ethical considerations.
    `


      // // TODO Make these files available on the local file system
      // // You may need to update the file paths
      // const files = [
      //   await uploadToGemini("image_animal2.jpeg", "image/jpeg"),
      // ];
  
  const result = await model.generateContent({
    contents: [
      {
        role: 'user',
        parts: [
          // {
          //   fileData: {
          //     mimeType: files[0].mimeType,
          //     fileUri: files[0].uri,
          //   },
          // },
          {
            text: system_prompt
          },
        ],
      }
    ],
    generationConfig: {
      // maxOutputTokens: 1000,
      // temperature: 0.1,
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    },
  });
  // const generationConfig = {
  //   temperature: 1,
  //   topP: 0.95,
  //   topK: 64,
  //   maxOutputTokens: 8192,
  //   responseMimeType: "text/plain",
  // };

  const safetySettings = [
    {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    ];
  
  async function run(prompt) {
    const chatSession = model.startChat({
      result,
      safetySettings,
      history: [
      ],
    });
  
    // result = await chatSession.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());
    return response.text();
  }
  
  export default run;


