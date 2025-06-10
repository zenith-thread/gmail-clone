import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  serverTimestamp,
  addDoc,
  getDocs,
  collection,
  query,
  orderBy,
  doc,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzBSJtQjPQBMKeM9qltaNCeSTtnSou_Fc",
  authDomain: "clone-cbda0.firebaseapp.com",
  projectId: "clone-cbda0",
  storageBucket: "clone-cbda0.firebasestorage.app",
  messagingSenderId: "317672892120",
  appId: "1:317672892120:web:afd78b5ba2e7325ba8d9ad",
  measurementId: "G-6K85VWTJP8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth
export const auth = getAuth();

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// Firestore db
export const db = getFirestore(app);

// create Emails
export const createEmailInFirebase = async (emailFormInputsToAdd = {}) => {
  if (!emailFormInputsToAdd || Object.keys(emailFormInputsToAdd).length === 0) {
    console.log("Input fields were empty!");
    return;
  }

  try {
    const collectionReference = collection(db, "emails");

    const emailReference = await addDoc(collectionReference, {
      ...emailFormInputsToAdd,
      createdAt: serverTimestamp(),
      deleted: false,
    });

    return emailReference;
  } catch (err) {
    console.log(err);
  }
};

// fetch Emails

export const getEmailsFromFirebase = async () => {
  const collectionReferece = collection(db, "emails");
  const q = query(
    collectionReferece,
    where("deleted", "==", false),
    orderBy("createdAt", "desc")
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data(),
  }));
};

// Delete Email

export const softDeleteEmailInFirebase = async (emailId) => {
  if (!emailId) return;

  const emailDocRef = doc(db, "emails", emailId);
  await updateDoc(emailDocRef, { deleted: true });
};

export const hardDeleteEmailInFirebase = async (emailId) => {
  if (!emailId) return;

  const emailDocRef = doc(db, "emails", emailId);
  await deleteDoc(emailDocRef);
};
