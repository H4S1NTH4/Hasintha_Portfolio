import { getApp, getApps, initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export function getFirebaseStorage() {
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  return getStorage(app);
}

export async function fetchStorageUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http") || pathOrUrl.startsWith("/")) {
    return pathOrUrl;
  }

  return getDownloadURL(ref(getFirebaseStorage(), pathOrUrl));
}

export async function fetchCertificateUrl(pathOrUrl: string) {
  return fetchStorageUrl(pathOrUrl);
}

export async function fetchCvUrl(pathOrUrl: string) {
  return fetchStorageUrl(pathOrUrl);
}
