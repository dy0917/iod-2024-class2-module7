import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import DashboardPage from "../pages/DashboardPage";
import DashboardMessages from "../pages/DashboardMessages";
import DashboardTasks from "../pages/DashboardTasks";
import PageNotFound from "../pages/PageNotFound";
import DashboardUsers from "../pages/DashboardUsers";
import PostsPage from "../pages/PostPage";
import PostList from "../pages/PostList";
import Post from "../pages/Post";
import ProtectedRoute from "../pages/ProtectedRoute";
function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />

      {/* nested routes, matches on /dash/messages etc */}
      <Route
        path="dash"
        element={
          <ProtectedRoute>
            <DashboardPage {...props} />
          </ProtectedRoute>
        }
      >
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
        <Route path="users/:userId" element={<DashboardUsers />} />
      </Route>
      <Route path="posts" element={<PostsPage />}>
        <Route index element={<PostList />} />
        <Route path=":id" element={<Post />} />
      </Route>
      {/* <Route path="app" element={<App />}></Route> */}

      <Route path="/about" element={<AboutPage {...props} />} />

      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
