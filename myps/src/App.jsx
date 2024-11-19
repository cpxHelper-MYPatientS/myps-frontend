import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";

function App() {

  return (
    <Router future={{ v7_relativeSplatPath: true,v7_startTransition: true }}>
    <Routes>
      <Route path="/" element={<MainPage/>} />
    </Routes>
    </Router>
  )
}

export default App;
