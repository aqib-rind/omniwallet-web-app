import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HotelSearch from "./pages/HotelSearch";
import CarSearch from "./pages/CarSearch";
import Thingstodo from "./pages/Thingstodo";
import FlightsSearch from "./pages/FlightsSearch";
import Cardetails from "./pages/Cardetails";
import Thingstododetails from "./pages/Thingstododetails";
import HotelSearchDetails from "./pages/HotelSearchDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter basename="omniwallet">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hotel-search" element={<HotelSearch />} />
          <Route
            path="/hotel-search/details"
            element={<HotelSearchDetails />}
          />
          <Route path="/car-search" element={<CarSearch />} />
          <Route path="/car-search/details" element={<Cardetails />} />
          <Route path="/thingtodo" element={<Thingstodo />} />
          <Route path="/thingtodo/details" element={<Thingstododetails />} />
          <Route path="/flights-search" element={<FlightsSearch />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
