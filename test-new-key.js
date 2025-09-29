require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testNewKey() {
    console.log('🔧 Testing new API key...\n');
    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const modelName = 'gemini-1.5-flash-latest';
    
    try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent('Say "New API Key Working" in one word.');
        const response = result.response.text();
        console.log(`✅ SUCCESS: ${response}`);
        console.log(`🎉 New API key is working with model: ${modelName}`);
        return true;
    } catch (error) {
        console.log(`❌ Failed: ${error.message}`);
        return false;
    }
}

testNewKey();
