import { Navigate, Route, Routes } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import useCheckAuth from "../hooks/useCheckAuth";
import JournalRoutes from "../journal/routes/JournalRoutes";
import CheckingAuth from "../ui/components/CheckingAuth";

const AppRouter = () => {

  // desestructuramos el status que viene del customHook
  const {status} = useCheckAuth()

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {/* Si estoy autenticado muestra el journal sino la autenticacion */}
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      {/* Cualquier otra ruta que no este definida arriba, va a ir al /auth/login */}
      <Route path="/*" element={<Navigate to="/auth/login" />} /> 

      {/* login y registro.  Cualquier path que ingrese por auth/  muestra el AuthRoutes*/}
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

      {/* Cualquier otra ruta que no entre por /auth  nos manda al JournalRoutes*/}
      {/* <Route path="/*" element={<JournalRoutes />} /> */}
      <Route />
    </Routes>
  );
};

export default AppRouter;
