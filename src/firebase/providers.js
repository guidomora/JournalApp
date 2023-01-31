// Proveedores de autenticacion
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  // Como esto puede fallar usamos un trycatch
  // result seria el resultado de signInWithPopup (importado de firebase) primero recibe el auth
  // que seria nuestro FirebaseAuth y segundo el provider googleProvider (creado arriba)
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    // todas las propiedades que estan dentro de result
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    // Copieado desde la docu de firebase
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

// Crear un usuario y password
// Tarea asincrona obvio
export const registerUSerWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  // Como es una tarea que puede fallar hacemos un try catch

  try {
    // importado de firebase, pide 3 argumentos: auth, email y password
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    // Nos pide un usuario, lo buscamos de la siguiente manera
    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return { ok: true, uid, photoURL, email, displayName };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = resp.user;
  
    return { ok: true, uid, photoURL, displayName };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};
