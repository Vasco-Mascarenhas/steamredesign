import { Layout, ScrollTop } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Store/subpages/home/Home";
import Store from "./pages/Store/Store";
import Browse from "./pages/Store/subpages/browse/Browse";
import GameDetails from "./pages/Store/subpages/gameDetails/GameDetails";
import { SelectedGameProvider } from "./contexts/selectedGame";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <SelectedGameProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Store />}>
                <Route index element={<Home />} />
                <Route path="Browse" element={<Browse />} />
                <Route path="gameDetails" element={<GameDetails />} />
              </Route>
            </Routes>
          </Layout>
        </SelectedGameProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
