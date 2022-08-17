import { Homepage } from "pages/Sitemaps";

export default function WebRoutes() {
    return (
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    );
  }
  