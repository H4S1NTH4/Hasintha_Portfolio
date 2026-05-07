# Hasintha Dilshan Portfolio

A personal portfolio website for Hasintha Dilshan, built with Next.js App Router and Tailwind CSS. The design follows an industrial cyber-physical / IoT dashboard style with glassmorphism panels, responsive layouts, CV download support, printable portfolio PDF support, Firebase Storage placeholders, and a Gemini-powered chatbot.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Firebase Storage
- Google Gemini API
- react-to-print

## Getting Started

Install dependencies:

```bash
npm install
```

Create your local environment file:

```bash
cp .env.example .env.local
```

Then update `.env.local` with your Gemini and Firebase values. See `FIREBASE_SETUP.md` for Firebase Storage notes.

Run the development server:

```bash
npm run dev
```

Open the site:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build and checks TypeScript validity.

```bash
npm run start
```

Runs the production build locally after `npm run build`.

```bash
npm run lint
```

Runs the configured Next.js lint command.

## Environment Variables

Required for chatbot:

```bash
GEMINI_API_KEY=your_google_gemini_api_key
```

Required for Firebase Storage helper:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Content Data

Portfolio content is stored in:

```text
data/data.json
```

Update this file to change profile details, career plan, CV content, certificates, and download URLs.

## Downloads

- **Download CV** uses `cv_download_url` from `data/data.json`.
- **Portfolio PDF** uses `react-to-print` and browser print/save-as-PDF behavior.
- Print styles are defined in `app/globals.css` under `@media print`.

## Certificates and CV

Local assets are stored in:

```text
public/certificates
public/cv
```

For production, upload these files to Firebase Storage and replace the placeholder URLs in `data/data.json`.
