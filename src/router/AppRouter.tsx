import { Routes, Route, Navigate } from "react-router-dom";

import FeedPage from "../pages/FeedPage";
import ProfilePage from "../pages/ProfilePage";
import PostPage from "../pages/PostPage";

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
      />
    </Routes>
  );
}

export default AppRouter;