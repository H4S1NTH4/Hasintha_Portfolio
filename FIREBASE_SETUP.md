# Firebase and Gemini Setup

1. Copy `.env.example` to `.env.local`.
2. Add `GEMINI_API_KEY` from Google AI Studio.
3. Add the Firebase web app keys for Storage:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
4. Upload the CV and certificate images to Firebase Storage.
5. Replace `cv_download_url` and every certificate `firebase_url` in `data/data.json` with the real Firebase Storage download URLs.

For public portfolio files, configure Firebase Storage rules to allow read access for those paths, or generate signed/public download URLs and store those URLs in `data/data.json`.
