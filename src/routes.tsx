import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./pages/PublicLayout.tsx"; // Separate Layout for Login
import ProtectedLayout from "./pages/ProtectedLayout.tsx"; // Layout for authenticated pages
import MainPage from "./pages/MainPage.tsx";
import DashBoardPage from "./pages/DashBoardPage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import PostsPage from "./pages/PostsPage.tsx";
import TemplatesPage from "./pages/TemplatesPage.tsx";
import AnalyticsPage from "./pages/AnalyticsPage.tsx";
import ECommercePage from "./pages/ECommercePage.tsx";
import SecurityPage from "./pages/SecurityPage.tsx";
import MediaPage from "./pages/MediaPage.tsx";
import AddUser from "./pages/AddUser.tsx";
import AddPost from "./pages/AddPost.tsx";
import LogInPage from "./pages/LogInPage.tsx";
import { Navigate } from "react-router-dom";

// Simulated authentication function
const isAuthenticated = () => {
  console.log(localStorage.getItem("authToken"));
  return Boolean(localStorage.getItem("authToken")); // Adjust this logic as needed
};

// Protected Route Wrapper
const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  // Public Routes
  {
    path: "login",
    element: <PublicLayout />,
    children: [{ index: true, element: <LogInPage /> }],
  },

  {
    path: "/",
    element: <ProtectedRoute element={<ProtectedLayout />} />,
    children: [
      { index: true, path: "Dashboard", element: <DashBoardPage /> },
      { path: "Users", element: <UsersPage /> },
      { path: "Posts", element: <PostsPage /> },
      { path: "Templates", element: <TemplatesPage /> },
      { path: "Analytics", element: <AnalyticsPage /> },
      { path: "ECommerce", element: <ECommercePage /> },
      { path: "Security", element: <SecurityPage /> },
      { path: "Media", element: <MediaPage /> },
      { path: "Users/AddUser", element: <AddUser /> },
      { path: "Posts/AddPost", element: <AddPost /> },
    ],
  },

  // Fallback Route
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);

export default router;
