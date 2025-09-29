require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testGemini() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    const models = [
        'gemini-1.0-pro',
        'gemini-1.5-pro', 
        'gemini-pro',
        'gemini-1.0-pro-001',
        'gemini-1.5-pro-latest',
        'models/gemini-pro'
    ];
    
    for (const modelName of models) {
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent('Say "Block AI Working" in one word.');
            const response = result.response.text();
            console.log(modelName);
            return;
        } catch (error) {
            // Silent fail - don't output anything for failed models
        }
    }
    console.log('NO_WORKING_MODEL_FOUND');
}

testGemini();
