SETUP
1. Install Backend Dependencies
    cd backend
    npm install

2. Create .env File in backend/
    GROQ_API_KEY=YOUR_API_KEY
    GROQ_URL=https://api.groq.com/openai/v1/chat/completions
    GROQ_EXTRACT_MODEL=llama-3.1-8b-instant
    GROQ_ENHANCE_MODEL=llama-3.3-70b-versatile
    PORT=3001

3. Start Backend
    (In Development) npm run dev
    (In Production) npm run build && npm run start
    The backend will run on http://localhost:3001.

4. Install Frontend Dependencies
    Open a new terminal:
    cd frontend
    npm install

5. Start Frontend
    (In Development) npm run dev
    (In Production) npm run build && npm run start
    The frontend will run on http://localhost:3000.

FOLDER STRUCTURE
    clip-core/
    ├── backend/
    │   ├── src/
    │   ├── api/    
    │   ├── dist/
    │   ├── package.json
    │   └── .env
    ├── frontend/
    │   ├── src/
    │   ├── public/
    │   ├── package.json
    └── README.md