require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testModels() {
    console.log('🔧 Testing available models...\n');
    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // Common model names that usually work
    const models = [
        'gemini-pro',
        'gemini-1.0-pro',
        'models/gemini-pro',
        'gemini-1.0-pro-001',
        'gemini-1.5-pro',
        'gemini-1.5-flash'
    ];
    
    for (const modelName of models) {
        console.log(`Testing: ${modelName}`);
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent('Say "Working" in one word.');
            const response = result.response.text();
            console.log(`✅ SUCCESS: ${response}`);
            console.log(`🎉 Use this model: ${modelName}\n`);
            return modelName;
        } catch (error) {
            console.log(`❌ Failed: ${error.message}\n`);
        }
    }
    
    console.log('🚨 No standard models worked. Checking available models...');
    
    // List available models to see what we have
    try {
        const modelsList = await genAI.listModels();
        const availableModels = modelsList.models.map(m => m.name);
        console.log('Available models:', availableModels);
        
        // Try the first available model that supports generateContent
        for (const model of modelsList.models) {
            if (model.supportedGenerationMethods.includes('generateContent')) {
                console.log(`\nTrying: ${model.name}`);
                try {
                    const testModel = genAI.getGenerativeModel({ model: model.name });
                    const result = await testModel.generateContent('Test');
                    console.log(`✅ SUCCESS with: ${model.name}`);
                    return model.name;
                } catch (e) {
                    console.log(`❌ Failed: ${e.message}`);
                }
            }
        }
    } catch (error) {
        console.log('Error listing models:', error.message);
    }
    
    return null;
}

testModels().then(workingModel => {
    if (workingModel) {
        console.log(`\n💡 UPDATE YOUR gemini-helper.js WITH THIS MODEL:`);
        console.log(`   this.model = this.genAI.getGenerativeModel({ model: "${workingModel}" });`);
    } else {
        console.log('\n❌ No working models found.');
    }
});
