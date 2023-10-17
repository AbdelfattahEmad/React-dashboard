import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardLayout from "./@dashboard/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Category from "./@dashboard/Pages/Category/Category";
import SubCategory from "./@dashboard/Pages/SubCategory/SubCategory";
import Brands from "./@dashboard/Pages/Brands/Brands";
import Products from "./@dashboard/Pages/Products/Products";
import Coupons from "./@dashboard/Pages/Coupons/Coupons";
import Orders from "./@dashboard/Pages/Orders/Orders";
import Settings from "./@dashboard/Pages/Settings/Settings";
import Users from "./@dashboard/Pages/Users/Users";
import Reviews from "./@dashboard/Pages/Reviews/Reviews";
import Adresses from "./@dashboard/Pages/Adresses/Adresses";
import AuthLayout from "./@auth/layout";
import Auth from "./@auth/pages/login/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Auth />} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="" element={<Products />} />
        <Route path="Categories" element={<Category />} />
        <Route path="SubCategories" element={<SubCategory />} />
        <Route path="Brands" element={<Brands />} />
        <Route path="Products" element={<Products />} />
        <Route path="Coupons" element={<Coupons />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="Settings" element={<Settings />} />
        <Route path="Users" element={<Users />} />
        <Route path="Reviews" element={<Reviews />} />
        <Route path="UserAdress" element={<Adresses />} />
      </Route>
    </Routes>
  );
}

export default App;