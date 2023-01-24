// Proveedores de autenticacion

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
      displayName, email, photoURL, uid 
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
