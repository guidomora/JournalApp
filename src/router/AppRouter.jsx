import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import JournalRoutes from "../journal/routes/JournalRoutes";

const AppRouter = () => {
  return (
    <Routes>
        {/* login y registro.  Cualquier path que ingrese por auth/  muestra el AuthRoutes*/}
      <Route path="/auth/*" element={<AuthRoutes />}/>

      {/* Cualquier otra ruta que no entre por /auth  nos manda al JournalRoutes*/}
      <Route path="/*" element={<JournalRoutes />}/>
      <Route />
    </Routes>
  );
};

export default AppRouter;
