// Logger utility for Block AI
// Generated: 2025-10-01T13:27:16.822Z

class Logger {
    static log(level, message) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
    }
    
    static info(message) {
        this.log('info', message);
    }
    
    static error(message) {
        this.log('error', message);
    }
    
    static warn(message) {
        this.log('warn', message);
    }
}

module.exports = Logger;
