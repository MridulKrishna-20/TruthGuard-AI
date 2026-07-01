# TruthGuard-AI
TruthGuard AI is a full-stack, multi-modal MLOps application designed to detect and categorize misinformation on the web in real-time. By bridging a Chrome browser extension frontend with a GPU-accelerated cloud backend, the system provides users with an instant credibility verdict, helping mitigate the impact of sophisticated fake news campaigns.

🎥 Project Demo
https://drive.google.com/file/d/1rNGtkz_1yOP4410lH0rfbxjhtlkm4nHS/view?usp=sharing

🏗️ System Architecture

The project is built on a robust three-tier architecture:

AI Inference Engine (Backend): A FastAPI-powered Python server running on Google Colab GPUs, utilizing a Hugging Face RoBERTa Transformer model for deep linguistic analysis.

Secure Gateway Bridge: A persistent Localtunnel bridge facilitating secure communication between the local Chrome client and the remote GPU cloud environment.

Frontend Client: A custom Chrome Extension (Manifest V3) that performs live DOM extraction and communicates with the inference engine to display real-time credibility scores.

🚀 Key Features

Real-time Inference: Instant semantic analysis of web content without external database dependencies.

Fact-Checking Integration: Automated Wikipedia cross-referencing to provide contextual evidence.

Full-Stack Pipeline: An end-to-end deployment including API design, CORS security configuration, and browser-to-cloud communication.

🛠️ Tech Stack

ML/NLP: Transformers (Hugging Face), PyTorch, RoBERTa.

Backend: FastAPI, Uvicorn, Trafilatura (Scraping).

Frontend: JavaScript (ES6), HTML5, CSS3, Chrome Extensions API.

Infrastructure: Google Colab, Localtunnel, Ngrok.

⚙️ Installation & Setup

Start the Backend: Open TruthGuard_Backend.ipynb in Google Colab and run all cells.

Configure Tunnel: Copy the generated loca.lt URL provided by the Colab cell.

Update Extension: Open Chrome_Extension/popup.js and paste the new URL into the fetch() function.

Deploy:

Open chrome://extensions/ in your browser.

Enable Developer Mode.

Click Load Unpacked and select your Chrome_Extension folder.

⚠️ Known Limitations

Anti-Bot Protections: Modern commercial sites (e.g., IGN) utilize advanced behavioral analytics and bot-detection (TLS fingerprinting). This system is highly optimized for open-source and educational resources (e.g., Wikipedia), which allows for transparent semantic analysis.

Developed by Mridul Krishna Trivedi
