require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function listAvailableModels() {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const models = await genAI.listModels();
        
        console.log('📋 Available models for your API key:');
        console.log('=======================================');
        
        models.models.forEach(model => {
            console.log(`\n🔹 Model: ${model.name}`);
            console.log(`   Display Name: ${model.displayName}`);
            console.log(`   Description: ${model.description}`);
            console.log(`   Supported Methods: ${model.supportedGenerationMethods.join(', ')}`);
            console.log(`   Temperature: ${model.temperature}`);
            console.log(`   Top P: ${model.topP}`);
            console.log(`   Top K: ${model.topK}`);
        });
        
        // Show models that support generateContent
        console.log('\n🎯 Models supporting generateContent:');
        console.log('====================================');
        models.models.forEach(model => {
            if (model.supportedGenerationMethods.includes('generateContent')) {
                console.log(`✅ ${model.name}`);
            }
        });
        
    } catch (error) {
        console.log('Error listing models:', error.message);
    }
}

listAvailableModels();
