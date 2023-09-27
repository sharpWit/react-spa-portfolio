import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DarkModeProvider } from "./context/DarkModeContext.js";
import HomePage from "./pages/HomePage.js";
import AppLayout from "./components/ui/AppLayout.js";
import SkilsPage from "./pages/SkilsPage.js";
import AboutMe from "./pages/AboutMe.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import ContactMePage from "./pages/ContactMePage.js";
import ExtraPage from "./pages/ExtraPage.js";
import PageNotFound from "./pages/PageNotFound.js";

const App = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="about-me" element={<SkilsPage />} />
            <Route path="about-me" element={<AboutMe />} />
            <Route path="about-me" element={<ProjectsPage />} />
            <Route path="about-me" element={<ContactMePage />} />
            <Route path="about-me" element={<ExtraPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default App;
