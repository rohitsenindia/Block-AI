const { GoogleGenerativeAI } = require("@google/generative-ai");

class GeminiHelper {
    constructor(apiKey) {
        this.genAI = new GoogleGenerativeAI(apiKey);
        this.model = this.genAI.getGenerativeModel({ model: "gemini-pro" });
    }

    async generateAIContent(prompt) {
        try {
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            return response.text();
        } catch (error) {
            console.error('Gemini API Error:', error);
            return null;
        }
    }

    // AI-powered code analysis
    async analyzeCode(codeSnippet) {
        const prompt = `Analyze this JavaScript code and provide insights:
${codeSnippet}

Provide:
1. Potential improvements
2. Security considerations
3. Performance optimizations`;

        return await this.generateAIContent(prompt);
    }

    // Generate documentation
    async generateDocs(code, functionName) {
        const prompt = `Generate professional documentation for this JavaScript function:

Function: ${functionName}
Code: ${code}

Provide:
- Description
- Parameters
- Return value
- Usage examples`;

        return await this.generateAIContent(prompt);
    }

    // Generate commit message
    async generateCommitMessage() {
        const prompts = [
            "Generate a brief feature description for a blockchain AI project commit message",
            "Generate a brief bug fix description for a JavaScript AI integration",
            "Generate a brief documentation update description for AI project",
            "Generate a brief code refactoring description for AI helper functions",
            "Generate a brief test case description for Gemini API integration",
            "Generate a brief performance improvement description for blockchain AI"
        ];
        
        const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
        const aiMessage = await this.generateAIContent(randomPrompt);
        
        const commitTypes = ['feat', 'fix', 'docs', 'refactor', 'test', 'perf'];
        const commitType = commitTypes[Math.floor(Math.random() * commitTypes.length)];
        
        if (aiMessage) {
            const cleanMessage = aiMessage.split('\n')[0].replace(/["']/g, '').substring(0, 50);
            return `${commitType}: ${cleanMessage}`;
        }
        
        // Fallback messages
        const fallbacks = {
            feat: "add new Gemini AI integration feature",
            fix: "resolve API response handling issue", 
            docs: "update project documentation and examples",
            refactor: "improve code structure and organization",
            test: "add test cases for AI functions",
            perf: "optimize AI response processing"
        };
        
        return `${commitType}: ${fallbacks[commitType]}`;
    }
}

module.exports = GeminiHelper;
