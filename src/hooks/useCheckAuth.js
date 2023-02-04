import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/authSlice";
import { useEffect } from "react";
import { startLoadingNotes } from "../store/journal/thunks";

const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // Forma de estar pendiente de los cambios que va a tener el usuario (nos brinda firebase)
    // Nos pide nuestro auth que seria el de fire base
    // El segundo parametro es un callback que es la funcion que yo quiero ejecutar cuando se reciba el user
    onAuthStateChanged(FirebaseAuth, async (user) => {
      // si no hay un usuario llama al logut
      if (!user) return dispatch(logout());

      // pero si tengo el usuario se despacha el usuario
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
      dispatch(startLoadingNotes())
    });
  }, []);

  return {
    status,
  };
};

export default useCheckAuth;
