# 🧠 Block-AI ⛓️  
**AI-Powered Blockchain Automation using Google’s Gemini API**

![AI + Blockchain](https://img.shields.io/badge/AI-Blockchain-blueviolet?style=for-the-badge)  
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge)  
![License](https://img.shields.io/badge/license-MIT-lightgrey?style=for-the-badge)  
![Build](https://img.shields.io/github/actions/workflow/status/rohitsenindia/Block-AI/node.js.yml?style=for-the-badge)  
![Coverage](https://img.shields.io/codecov/c/github/rohitsenindia/Block-AI?style=for-the-badge)  
![NPM Version](https://img.shields.io/npm/v/block-ai-tools?style=for-the-badge)

---

## 🚀 Overview
**Block-AI** integrates **Google’s Gemini AI** with **blockchain development workflows**, automating tasks like code generation, smart contract management, and documentation updates.  
It helps developers streamline repetitive work, boost productivity, and maintain cleaner, more intelligent repositories.

---

## 🧩 Features

| Category | Description |
|-----------|-------------|
| 🤖 **AI-Powered Development** | Uses Google Gemini API for smart code generation, refactoring, and debugging. |
| ⛓️ **Blockchain Tools** | Built-in helpers for smart contract creation and deployment. |
| 🔄 **Automated Commits** | AI automatically generates meaningful commit messages. |
| 🧠 **Smart Docs** | Auto-generates and maintains up-to-date project documentation. |
| 🚀 **Continuous Automation** | Supports automated testing and integration pipelines. |

---

## 🏗️ Project Structure

```
Block-AI/
├── docs/                  # Documentation & test coverage
├── examples/              # Example Gemini AI integrations
├── src/                   # Core AI & blockchain logic
├── test/                  # Unit & integration test cases
├── .env.example           # Example environment variables
├── automation-log.json    # Automation event logs
├── package.json           # Project metadata & dependencies
├── README.md              # Project documentation
└── .gitignore             # Git ignore settings
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/rohitsenindia/Block-AI.git
cd Block-AI
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a `.env` file from the example:
```bash
cp .env.example .env
```
Then, add your Gemini API credentials:
```env
GEMINI_API_KEY=your_google_gemini_api_key
BLOCKCHAIN_RPC_URL=https://rpc.your-network.org
```

### 4. Run the Project
```bash
npm start
```

---

## 🧪 Testing

Block-AI includes a growing suite of automated test scripts to ensure functionality and performance.

```bash
npm test
```

Test files include:
- `test-gemini.js` — validates AI response quality  
- `test-new-model.js` — checks model integration  
- `test-correct-models.js` — ensures accurate model selection

---

## 🔐 Security

- Sensitive API keys are stored in `.env` files (never committed).  
- Automated commits are sanitized and verified before pushing.  
- Each AI request is logged securely in `automation-log.json` for transparency.

---

## 🧠 Example Use Case

Example: Automatically generate and commit smart contract functions.

```bash
node examples/generate-contract.js
```

AI output will:
- Analyze blockchain code
- Suggest optimizations
- Commit meaningful updates automatically

---

## 📈 Roadmap

- [ ] Add support for OpenAI + Anthropic fallback models  
- [ ] Integrate Ethereum and Solana smart contract templates  
- [ ] Build a web dashboard for real-time AI automation logs  
- [ ] Launch NPM package: `block-ai-tools`

---

## 🧑‍💻 Contributing

Contributions are welcome!  
Fork the repo, create a feature branch, and submit a PR.

```bash
git checkout -b feature/new-ai-tool
git commit -m "feat: add new AI-powered blockchain helper"
git push origin feature/new-ai-tool
```

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use and modify it.

---

## 💬 Contact

**Author:** [Rohit Sen](https://github.com/rohitsenindia)  
**Project:** [Block-AI](https://github.com/rohitsenindia/Block-AI)  
**Twitter:** [@rohitsenindia](https://x.com/ask_rohitsen)
