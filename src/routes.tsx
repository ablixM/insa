import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <LogInPage /> }],
  },

  {
    path: "/",
    element: <MainPage />,
    children: [
      { index: true, path: "Dashboard", element: <DashBoardPage /> },
      {
        path: "Users",
        element: <UsersPage />,
      },
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
]);

export default router;
