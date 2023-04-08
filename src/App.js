
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { NewsPage } from "./pages/NewsPage";
import InfoPage1 from './pages/InfoPage1';
import InfoPage2 from './pages/InfoPage2';
import InfoPage3 from './pages/InfoPage3';


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
          <NewsPage />
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
      <Route
        path="/info3"
        element={
          <InfoPage3 />
        }
      />
    </Routes>
  );
}

export default App;
