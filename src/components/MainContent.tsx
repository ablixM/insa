// Desc: Main content component that renders the active page
import DashBoardPage from "../pages/DashBoardPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import TemplatesPage from "../pages/TemplatesPage.tsx";
import AnalyticsPage from "../pages/AnalyticsPage.tsx";
import ECommercePage from "../pages/ECommercePage.tsx";
import SecurityPage from "../pages/SecurityPage.tsx";
import MediaPage from "../pages/MediaPage.tsx";

interface Props {
  activePage: string;
}

const MainContent = ({ activePage }: Props) => {
  const renderActivePage = () => {
    switch (activePage) {
      case "Dashboard":
        return <DashBoardPage />;
      case "Users":
        return <UsersPage />;
      case "Posts":
        return <PostsPage />;
      case "Templates":
        return <TemplatesPage />;
      case "Analytics":
        return <AnalyticsPage />;
      case "ECommerce":
        return <ECommercePage />;
      case "Security":
        return <SecurityPage />;
      case "Media":
        return <MediaPage />;
      default:
        return <div>Select a page</div>;
    }
  };

  return <>{renderActivePage()}</>;
};

export default MainContent;
