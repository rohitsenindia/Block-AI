const { HfInference } = require('@huggingface/inference');

class HuggingFaceHelper {
    constructor(apiKey) {
        this.hf = new HfInference(apiKey);
    }

    async generateCommitMessage() {
        try {
            console.log('🤗 Using Hugging Face AI...');
            
            const response = await this.hf.textGeneration({
                model: "microsoft/DialoGPT-medium",
                inputs: "Generate a creative git commit message for a blockchain AI project:",
                parameters: { 
                    max_new_tokens: 30,
                    temperature: 0.8,
                    do_sample: true 
                }
            });
            
            let message = response.generated_text
                .replace('Generate a creative git commit message for a blockchain AI project:', '')
                .replace(/["']/g, '')
                .trim()
                .substring(0, 50);
                
            if (!message) throw new Error('Empty response');
                
            const commitTypes = ['feat', 'fix', 'docs', 'refactor', 'test', 'chore'];
            const commitType = commitTypes[Math.floor(Math.random() * commitTypes.length)];
            
            return `${commitType}: ${message}`;
            
        } catch (error) {
            console.log('🤗 Hugging Face failed, using fallback:', error.message);
            return this.getFallbackMessage();
        }
    }
    
    getFallbackMessage() {
        const messages = [
            "feat: add blockchain AI integration system",
            "fix: resolve API configuration issues", 
            "docs: update project documentation structure",
            "refactor: improve code organization",
            "test: add automation test cases",
            "chore: update dependencies and config",
            "feat: implement smart contract helpers",
            "fix: correct git automation workflow",
            "docs: add setup instructions",
            "refactor: optimize project structure",
            "feat: add Web3 integration utilities",
            "fix: resolve environment variables",
            "docs: improve API documentation",
            "refactor: clean up utility functions"
        ];
        return messages[Math.floor(Math.random() * messages.length)];
    }
}

module.exports = HuggingFaceHelper;
