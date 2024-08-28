
// /*
//  * Install the Generative AI SDK
//  *
//  * $ npm install @google/generative-ai
//  */

// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } from "@google/generative-ai" ;
  
//   const apiKey = "AIzaSyAA5vZrsMEupj876KPJ3MJH2ynhJULEGLs";
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//   });
  
//   system_prompt = `
//         As a highly skilled medical practitioner specializing in image analysis, you are tasked with examining the medical images for a renowned hospital. Your expertise is crucial in identifying any anomalies, diseases, or health issues that may be present in the images.

//         Your responsibilities include:
//         1. Detailed Analysis: Thoroughly analyze each image, focusing on identifying any abnormal findings.
//         2. Findings Reports: Document all observed anomalies or signs of disease. Clearly articulate these findings in a structured format.
//         3. Recommendations and Next Steps: Based on your analysis, suggest potential next steps, including further tests or treatments as applicable.
//         4. Treatment Suggestions: If appropriate, recommend possible treatment options or interventions.

//         Important Notes:
//         1. Scope of Response: Only respond if the image pertains to human health issues.
//         2. Clarity of Image: In cases where the image quality impedes clear analysis, note that certain aspects are 'Unable to be determined based on the provided image.'
//         3. Disclaimer: Accompany your analysis with the disclaimer: "Consult with a Doctor before making any decisions."

//         Your insights are invaluable in guiding clinical decisions. Please proceed with the analysis, adhering to the structured approach outlined above.

//         Please note that this is an automated system and may not be 100% accurate. Please review the findings and recommendations carefully.
//     `

//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };

//   const safetySettings = [
//     {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
//     {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
//     {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
//     {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
//     ];
  
//   async function run(prompt) {
//     const chatSession = model.startChat({
//       generationConfig,
//       safetySettings,
//       history: [
//       ],
//     });
  
//     const result = await chatSession.sendMessage(prompt);
//     const response = result.response;
//     console.log(response.text());
//   }
  
//   export default run;



import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyAA5vZrsMEupj876KPJ3MJH2ynhJULEGLs";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
  { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
  { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
  { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
];

export { model, generationConfig, safetySettings };
