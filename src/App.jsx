import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layout'
import {Routes, Route } from 'react-router-dom'
import Category from './Components/Pages/Category/Category';
import SubCategory from './Components/Pages/SubCategory/SubCategory';
import Brands from './Components/Pages/Brands/Brands';
import Products from './Components/Pages/Products/Products';
import Coupons from './Components/Pages/Coupons/Coupons';
import Orders from './Components/Pages/Orders/Orders';
import Settings from './Components/Pages/Settings/Settings';
import Users from './Components/Pages/Users/Users';
import Auth from './Components/Pages/Auth/Auth';
import Reviews from './Components/Pages/Reviews/Reviews';
import Adresses from './Components/Pages/Adresses/Adresses';


function App() {
  return (

    <Routes>

      <Route path="/" element={<Layout />} >
        <Route path='Categories' element={<Category/>} />
        <Route path='SubCategories' element={<SubCategory/>} />
        <Route path='Brands' element={<Brands/>} />
        <Route path='Products' element={<Products/>} />
        <Route path='Products' element={<Products/>} />
        <Route path='Coupons' element={<Coupons/>} />
        <Route path='Orders' element={<Orders/>} />
        <Route path='Settings' element={<Settings/>} />
        <Route path='Users' element={<Users/>} />
        <Route path='Auth' element={<Auth/>} />
        <Route path='Reviews' element={<Reviews/>} />
        <Route path='UserAdress' element={<Adresses/>} />








     


       


        



      </Route>

    </Routes>
   
  )
}

export default App
