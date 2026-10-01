# Sonu Kumar Portfolio — Modern Redesign

A modern AI Engineer portfolio featuring a React frontend and a Gemini-powered recruiter assistant.

## Tech Stack

- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: FastAPI, Python
- AI: Google Gemini API (`google-genai`)
- Deployment: Vercel for frontend and Render for backend

## Project Structure

- `frontend/` — React + TypeScript + Vite + Tailwind portfolio
- `backend/` — FastAPI portfolio assistant powered by Google Gemini

## Run Locally

### Backend

Open a terminal in the project root:

```powershell
cd backend
uv venv
.\.venv\Scripts\Activate.ps1
uv pip install -r requirements.txt
Copy-Item .env.example .env
```

Open `backend/.env` and add:

```env
GEMINI_API_KEY=your_google_gemini_api_key
GEMINI_MODEL=gemini-3.5-flash-lite
ALLOWED_ORIGINS=http://localhost:5173
RATE_LIMIT_PER_MINUTE=20
ENVIRONMENT=development
LOG_LEVEL=INFO
```

Start the backend:

```powershell
uv run uvicorn main:app --reload
```

The backend runs here:

```text
http://localhost:8000
```

Test it here:

```text
http://localhost:8000/health
```

### Frontend

Open a second terminal in the project root:

```powershell
cd frontend
npm install
Copy-Item .env.example .env
```

Set this in `frontend/.env`:

```env
VITE_API_URL=http://localhost:8000
```

Start the frontend:

```powershell
npm run dev
```

Open the portfolio:

```text
http://localhost:5173
```

## Deploy

### Backend: Render

1. Create a Render Web Service connected to this GitHub repository.
2. Set **Root Directory** to:

   ```text
   backend
   ```

3. Add these Render environment variables:

   ```env
   GEMINI_API_KEY=your_google_gemini_api_key
   GEMINI_MODEL=gemini-3.5-flash-lite
   ALLOWED_ORIGINS=https://your-frontend.vercel.app
   RATE_LIMIT_PER_MINUTE=20
   ENVIRONMENT=production
   LOG_LEVEL=INFO
   ```

4. Deploy the backend and copy its Render URL.

### Frontend: Vercel

1. Import this GitHub repository into Vercel.
2. Set **Root Directory** to:

   ```text
   frontend
   ```

3. Add this Vercel environment variable:

   ```env
   VITE_API_URL=https://your-render-backend-url.onrender.com
   ```

4. Deploy the frontend.
5. Copy your Vercel URL.
6. In Render, update the backend variable:

   ```env
   ALLOWED_ORIGINS=https://your-new-frontend.vercel.app
   ```

7. Redeploy the Render backend.

## Security

- Never commit `.env` files.
- Never upload your Gemini API key to GitHub.
- Store `GEMINI_API_KEY` only in your local `backend/.env` and Render environment variables.
- Keep `.env.example` files as templates only.


Testing Vercel deployment