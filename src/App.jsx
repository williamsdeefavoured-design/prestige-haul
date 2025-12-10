import { Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Order from "./pages/Order";
import Rides from "./pages/Rides";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./pages/Cart";
import History from "./pages/History";
import { NotificationProvider } from "./components/context/NotificationContext";
import { CartProvider } from "./components/context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReceiptIcon } from "lucide-react";

function App() {
  return (
    <>
      <NotificationProvider>
        <Navbar />

        {/* ToastContainer should be OUTSIDE Routes */}
        <ToastContainer
          position="top-right"
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rides" element={<Rides />} />
            <Route path="/history" element={<History />} />

            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            />

            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </NotificationProvider>
      <Footer />
    </>
  );
}

export default App;
