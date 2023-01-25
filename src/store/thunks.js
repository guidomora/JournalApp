import { registerUSerWithEmailPassword, signInWithGoogle } from "../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    // el ok es una propiedad del result, un booleano
    // si result.ok da false se despacha la funcion de logout
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

// Crear usuario y password

export const startCreatingUserWithEmailPassword = ({email, password, displayName})=> {
  return async (dispatch) => {
    // El estado se pone en "checking"
    dispatch(checkingCredentials())
    const result  = await registerUSerWithEmailPassword({email, password, displayName})
    
    // si la funcion fallo nos despacha el mensaje de error
    if (!result.ok) return dispatch(logout(result.errorMessage))

    dispatch(login({uid, displayName, email, photoURL}))
  }
}