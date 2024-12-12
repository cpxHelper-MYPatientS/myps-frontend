import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import CasePracticePage from "./pages/CasePage/CasePracticePage.jsx";
import CaseDetailPage from "./pages/CasePage/CaseDetailPage.jsx";

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/case" element={<CasePracticePage />} />
        <Route path="/case/heart" element={<CaseDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
