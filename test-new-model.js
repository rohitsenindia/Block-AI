require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testModel() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // Test the model from your working script
    const modelName = 'gemini-1.5-flash-latest';
    
    try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent('Say "Block AI Working" in one word.');
        const response = result.response.text();
        console.log(`✅ SUCCESS with ${modelName}: ${response}`);
        return true;
    } catch (error) {
        console.log(`❌ Failed with ${modelName}: ${error.message}`);
        return false;
    }
}

testModel();
