
/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */


import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const getFileBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
  });
};

const getImageBase64 = async () => {
  const fileInput = document.getElementById('fileInput');
  if (!fileInput || !fileInput.files.length) {
    console.warn('No file selected or fileInput not found.');
    return null;
  }
  const file = fileInput.files[0];
  return await getFileBase64(file);
};

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

  
  const system_prompt = ` 
    As an AI specialized in medical and health-related information, your task is to analyze and respond to either text or image inputs related to medical health.

    Your responsibilities include:
    1. Text Analysis: Generate a clear, concise, and medically accurate response for text inputs. Identify symptoms, conditions, treatments, or relevant health information.
    2. Image Analysis: Analyze images within your trained capacity. Identify visible medical issues or anomalies and provide an appropriate response or recommendation.
    3. Recommendations and Next Steps: Suggest potential next steps based on the analysis, like further tests, treatments, or consulting a healthcare professional.
    4. Empathy and Support: Respond with empathy, considering the user's emotional state and the sensitive nature of health-related information.
    5. Symptom Identification: Identify and list any symptoms mentioned in the text, associating them with possible conditions or health concerns.
    6. Condition Analysis: Analyze the text to detect any medical conditions, offering explanations and insights into these conditions.
    7. Treatment Recommendations: Suggest potential treatments, lifestyle adjustments, or next steps based on the symptoms and conditions identified, ensuring all advice aligns with current medical guidelines.
    8. Clarification: If the text contains any unclear or ambiguous information, attempt to clarify it based on context or indicate that the information is 'Unable to be determined' with a recommendation to consult a healthcare provider.
  
    Important Notes:
    1. Limit responses to medical health, wellness, and healthcare-related topics.
    2. For unclear images, note that aspects are 'Unable to be determined based on the provided input' and recommend professional evaluation.
    3. Respect user privacy, avoid providing harmful advice, and maintain confidentiality.
    4. Include the disclaimer: "This information is not a substitute for professional medical advice. Please consult a healthcare provider for any medical concerns."

    Provide reliable, empathetic, and medically sound guidance based on the provided text or image, prioritizing user safety and ethical considerations.
`;

const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];

async function run(promptInputText) {
  const imageBase64 = await getImageBase64();
  
  const contentParts = [
    { text: system_prompt },
    { text: promptInputText }
  ];
  
  if (imageBase64) {
    contentParts.unshift({
      inline_data: { mime_type: 'image/jpeg', data: imageBase64 },
    });
  }

  const result = await model.generateContent({
    contents: [
      {
        role: 'user',
        parts: contentParts,
      }
    ],
    generationConfig: {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    },
    safetySettings,
  });

  const response = result.response;
  console.log(response.text());
  return response.text();
}

export default run;
