# Setup Instructions

## Backend Setup

1. **Install Backend Dependencies**  
    ```bash
    cd backend
    npm install
    ```

2. **Create .env File in backend/**  
    ```env
    GROQ_API_KEY=YOUR_API_KEY
    GROQ_URL=https://api.groq.com/openai/v1/chat/completions
    GROQ_EXTRACT_MODEL=llama-3.1-8b-instant
    GROQ_ENHANCE_MODEL=llama-3.3-70b-versatile
    PORT=3001
    ```

3. **Start Backend**  
    - Development:  
      ```bash
      npm run dev
      ```  
    - Production:  
      ```bash
      npm run build && npm run start
      ```  
    Backend will run at: `http://localhost:3001`

## Frontend Setup

4. **Install Frontend Dependencies**  
    ```bash
    cd frontend
    npm install
    ```

5. **Start Frontend**  
    - Development:  
      ```bash
      npm run dev
      ```  
    - Production:  
      ```bash
      npm run build && npm run start
      ```  
    Frontend will run at: `http://localhost:3000`

## Folder Structure

```text
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
│   └── package.json
└── README.md