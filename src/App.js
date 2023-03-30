
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TagPage from './pages/TagPage';
import InfoPage1 from './pages/InfoPage1';
import InfoPage2 from './pages/InfoPage2';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage />
        }
      />
      <Route
        path="/tag"
        element={
          <TagPage />
        }
      />
      <Route
        path="/info1"
        element={
          <InfoPage1 />
        }
      />
      <Route
        path="/info2"
        element={
          <InfoPage2 />
        }
      />
    </Routes>
  );
}

export default App;
