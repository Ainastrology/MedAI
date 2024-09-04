const fs = require('fs');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function AI() {
  const prompt = "Does this look store-bought or homemade?";
  const image = {
    inlineData: {
      data: fs.readFileSync("cookie.png").toString("base64"),
      mimeType: "image/png",
    },
  };

  try {
    const result = await model.generateContent([prompt, image]);
    console.log(result.response.text());
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

AI();
