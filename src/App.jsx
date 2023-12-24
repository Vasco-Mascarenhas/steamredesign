import { Layout, ScrollTop } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/Store/Store";
import Vasco from "./pages/vasco/Vasco";
import { Browse, GameDetails, Home, Cart } from "./pages/Store/subpages";
import { CartProvider } from "./contexts/cartContext";
import { SelectedGameProvider } from "./contexts/selectedGame";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SelectedGenreProvider } from "./contexts/selectedGenre";
import { SelectedDeveloperProvider } from "./contexts/selectedDeveloper";
import { SelectedPublisherProvider } from "./contexts/selectedPublisher";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <CartProvider>
          <SelectedPublisherProvider>
            <SelectedDeveloperProvider>
              <SelectedGenreProvider>
                <SelectedGameProvider>
                  <Layout>
                    <Routes>
                      <Route path="/" element={<Store />}>
                        <Route index element={<Home />} />
                        <Route path="Browse" element={<Browse />} />
                        <Route path="gameDetails" element={<GameDetails />} />
                        <Route path="Cart" element={<Cart />} />
                      </Route>
                      <Route path="/Vasco" element={<Vasco />} />
                    </Routes>
                    <ToastContainer
                      position="bottom-right"
                      autoClose={2000}
                      hideProgressBar={true}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnHover={false}
                      theme="dark"
                      transition={Slide}
                      toastStyle={{ backgroundColor: "var(--bgMain)" }}
                    />
                  </Layout>
                </SelectedGameProvider>
              </SelectedGenreProvider>
            </SelectedDeveloperProvider>
          </SelectedPublisherProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
