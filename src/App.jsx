import { Layout, ScrollTop } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/Store/Store";
import { Browse, GameDetails, Home, Cart } from "./pages/Store/subpages";

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
                <Route path="Cart" element={<Cart />} />
              </Route>
            </Routes>
          </Layout>
        </SelectedGameProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
