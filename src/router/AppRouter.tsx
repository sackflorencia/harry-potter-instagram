import { Routes, Route, Navigate } from "react-router-dom";

import FeedPage from "../pages/FeedPage";
import ProfilePage from "../pages/ProfilePage";
import PostPage from "../pages/PostPage";

//ChatGPT me explico como crear las routes del approter, yo adapte a las pages que tengo
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<FeedPage />} />

      <Route
        path="/profile/:house"
        element={<ProfilePage />}
      />

      <Route
        path="/post/:postId"
        element={<PostPage />}
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      /> { /* este es para redireccionar a la pagina principal si el usuario ingresa una ruta que no existe */ } 
    </Routes>
  );
}

export default AppRouter;