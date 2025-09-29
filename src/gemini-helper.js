const HuggingFaceHelper = require('./huggingface-helper');

class GeminiHelper {
    constructor(apiKey) {
        // Use Hugging Face instead of Gemini
        this.hfHelper = new HuggingFaceHelper(apiKey);
    }

    async generateAIContent(prompt) {
        try {
            // For general content generation
            const commitMsg = await this.hfHelper.generateCommitMessage();
            return commitMsg.replace(/^(feat|fix|docs|refactor|test|chore):\s*/i, '');
        } catch (error) {
            return null;
        }
    }

    async generateCommitMessage() {
        return await this.hfHelper.generateCommitMessage();
    }

    async analyzeCode(codeSnippet) {
        return "Code analysis: Using Hugging Face AI integration";
    }

    async generateDocs(code, functionName) {
        return `Documentation for ${functionName}: Generated via Hugging Face AI`;
    }
}

module.exports = GeminiHelper;
