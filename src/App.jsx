import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardLayout from './@dashboard/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Category from './@dashboard/Pages/Category/Category';
import SubCategory from './@dashboard/Pages/SubCategory/SubCategory';
import Brands from './@dashboard/Pages/Brands/Brands';
import Products from './@dashboard/Pages/Products/Products';
import Coupons from './@dashboard/Pages/Coupons/Coupons';
import Orders from './@dashboard/Pages/Orders/Orders';
import Settings from './@dashboard/Pages/Settings/Settings';
import Users from './@dashboard/Pages/Users/Users';
import Reviews from './@dashboard/Pages/Reviews/Reviews';
import Adresses from './@dashboard/Pages/Adresses/Adresses';
import AuthLayout from './@auth/pages/LayoutAuth/layout';
import Auth from './@auth/pages/login/login';
import Signup from './@auth/pages/Signup/Signup';
import { Suspense, useEffect } from 'react';
import i18n from './i18n';
import Main from './@dashboard/Pages/Main/Main';
import EditSubCategory from './@dashboard/Pages/SubCategory/EditSubCategory/EditSubCategory';
import AddSubCategory from './@dashboard/Pages/SubCategory/AddSubCategory/AddSubCategory';
import EditCategory from './@dashboard/Pages/Category/EditCategory/EditCategory';
import AddCategory from './@dashboard/Pages/Category/AddCategory/AddCategory';
import AddProducts from './@dashboard/Pages/Products/Addproducts/AddProducts';


function App() {

  const detectLangue =()=>{

    const lang = localStorage.getItem("i18nextLng") 

    if(lang === "ar"){

      document.documentElement.setAttribute("dir", "rtl")
      document.documentElement.setAttribute("lang", "ar")
      localStorage.setItem("i18nextLng" , "ar" )
      i18n.changeLanguage("ar")

    }else{

      document.documentElement.setAttribute("dir", "ltr")
      document.documentElement.setAttribute("lang", "en")
      localStorage.setItem("i18nextLng" , "en" )

      i18n.changeLanguage("en")

    }

  }

  useEffect(()=>{
    detectLangue()
  },[])
  return (
    <>
      <Suspense>
        {' '}
        {/* to load translation files when opening app*/}
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Auth />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="" element={<Main />} />
            <Route path="Main" element={<Main />} />


            <Route path="Categories">
              <Route path="" element={<Category />}  />
              <Route path="AddCategory" element={<AddCategory />} />
              <Route path="EditCategory" element={<EditCategory />} />
            </Route>



            

            <Route path="SubCategories" element={<SubCategory />} />
            <Route path="Edit" element={<EditSubCategory />} />
            <Route path="AddSubCategory" element={<AddSubCategory />} />
            <Route path="AddProduct" element={<AddProducts />} />
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
      </Suspense>
    </>
  );
}

export default App;
