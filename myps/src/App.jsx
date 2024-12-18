import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import CasePracticePage from "./pages/CasePage/CasePracticePage.jsx";
import CaseDetailPage from "./pages/CasePage/CaseDetailPage.jsx";
import TestSettingPage from "./pages/TestPage/TestSettingPage.jsx";
import TestIntroPage from "./pages/TestPage/TestIntroPage.jsx";
import TestPage from "./pages/TestPage/TestPage.jsx";
import TestLoadingPage from "./pages/TestPage/TestLoadingPage.jsx";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage.jsx";
import NotePage from "./pages/SubPage/NotePage.jsx";
import { TestSettingProvider } from "./components/context/TestSettingContext.jsx";

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/case" element={<CasePracticePage />} />
        <Route path="/case/:caseId" element={<CaseDetailPage />} />
        <Route path="/test/intro" element={<TestIntroPage />} />
        <Route element={<TestSettingProvider />}>
          <Route path="/test/setting" element={<TestSettingPage />} />
          <Route path="/test" element={<TestPage />} />
        </Route>
        <Route path="/test/loading" element={<TestLoadingPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/note" element={<NotePage />} />
      </Routes>
    </Router>
  );
}

export default App;
