# Sonu Kumar Portfolio — Modern Redesign

This package contains two deployable projects:

- `frontend/`: React + TypeScript + Vite + Tailwind portfolio
- `backend/`: FastAPI + Mistral portfolio assistant

The redesign updates the visual system, project hierarchy, resume download,
responsive behavior, accessibility, SEO metadata, chatbot experience, API
validation, CORS policy, request timeout, rate limiting, and profile knowledge.

## Run locally

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Add MISTRAL_API_KEY to .env
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

The default frontend expects the backend at `http://localhost:8000`.

## Deploy

### Backend on Render

1. Push `backend/` to the backend repository.
2. Set `MISTRAL_API_KEY` as a secret environment variable.
3. Set `ALLOWED_ORIGINS` to the exact deployed frontend origin.
4. Deploy using `render.yaml` or the included build/start commands.

### Frontend on Vercel

1. Push `frontend/` to the frontend repository.
2. Set `VITE_API_URL` to the deployed backend URL.
3. Build with `npm run build`; output directory is `dist`.

Never commit `.env` files or API keys.