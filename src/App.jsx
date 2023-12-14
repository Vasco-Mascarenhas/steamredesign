import { Layout, ScrollTop } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/Store/Store";
import { Browse, GameDetails, Home, Cart } from "./pages/Store/subpages";
import { CartProvider } from "./context/cartContext";
import { SelectedGameProvider } from "./contexts/selectedGame";
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <CartProvider>
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
            toastStyle={{backgroundColor: 'var(--bgMain)'}}
            />
          </Layout>
        </SelectedGameProvider>
        </CartProvider>
        
      </BrowserRouter>
    </>
  );
}

export default App;
