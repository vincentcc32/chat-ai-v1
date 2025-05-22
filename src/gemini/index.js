import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_API_KEY });

// async function run(prompt, chatHistory = []) {
//   // console.log(chatHistory);

//   const history = chatHistory.map((item) => {
//     return {
//       role: item.isBot ? 'model' : 'user',
//       parts: [{ text: item.text }],
//     }
//   });
//   console.log(history);

//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash-preview-04-17",
//     history: history,
//     contents: prompt,
//   });
//   return response.text;
// }

// export default run;

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_API_KEY });
async function run(prompt, chatHistory = []) {
  const history = chatHistory.map((item) => {
    return {
      role: item.isBot ? 'model' : 'user',
      parts: [{ text: item.text }],
    }
  });
  const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    history: history,
    config: {
      tools: [{ codeExecution: {} }],
    }
  });

  const response = await chat.sendMessage({
    message: prompt
  });
  return response.text;
}




export default run;