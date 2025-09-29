require('dotenv').config();
const { execSync } = require('child_process');
const CommitGenerator = require('./commit-generator');
const fs = require('fs');

class GitHubAutomation {
    constructor() {
        this.geminiApiKey = process.env.GEMINI_API_KEY;
        // No error thrown if API key missing - we use fallbacks
        this.commitGenerator = new CommitGenerator(this.geminiApiKey);
    }

    async runAutomationCycle() {
        try {
            console.log('🚀 Starting Block AI automation cycle...');
            console.log('⏰', new Date().toISOString());

            // Pull latest changes first
            try {
                execSync('git pull origin main', { stdio: 'inherit' });
            } catch (error) {
                console.log('Note: Could not pull, may be first run');
            }

            // Generate meaningful changes
            const changedFile = await this.commitGenerator.createMeaningfulChange();
            
            // Generate commit message (will use fallback if API fails)
            const commitMessage = await this.commitGenerator.gemini.generateCommitMessage();
            console.log('📝 Commit message:', commitMessage);

            // Commit and push
            execSync('git add .', { stdio: 'inherit' });
            execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
            execSync('git push origin main', { stdio: 'inherit' });

            console.log('✅ Successfully committed and pushed!');
            console.log('📁 Modified file:', changedFile);
            
            // Log this activity
            this.logActivity(commitMessage, changedFile);
            
        } catch (error) {
            console.error('❌ Automation error:', error.message);
        }
    }

    logActivity(commitMessage, changedFile) {
        const logEntry = {
            timestamp: new Date().toISOString(),
            commit: commitMessage,
            file: changedFile,
            type: 'automation'
        };
        
        let logs = [];
        if (fs.existsSync('automation-log.json')) {
            const data = fs.readFileSync('automation-log.json', 'utf8');
            logs = JSON.parse(data);
        }
        
        logs.push(logEntry);
        fs.writeFileSync('automation-log.json', JSON.stringify(logs, null, 2));
    }
}

// Run the automation
const automation = new GitHubAutomation();

// Run immediately
automation.runAutomationCycle();

// Set interval based on environment variable or default to 8 hours
const intervalHours = process.env.AUTOMATION_INTERVAL_HOURS || 8;
const intervalMs = intervalHours * 60 * 60 * 1000;

console.log(`🕐 Next automation in ${intervalHours} hours...`);
setInterval(() => {
    automation.runAutomationCycle();
}, intervalMs);
