import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Screens/Home";
import CompanyLogin from "./Screens/Company_Login";
import CompanyHome from "./Screens/companyHome";
import ShowProduct from "./Screens/ShowProduct";
import ShowProdSubCat from "./Screens/ShowProdSubCat";
import ShowProdCategory from "./Screens/ShowProdCategory";
import BNBill from "./Screens/BNBill";
import Cart from "./Screens/Cart";
import Pinfo from "./Screens/PinfoCustomer";
import AdminLogin from "./Screens/AdminLogin";
import AdminHome from "./Screens/AdminHome";
import CustomerNavBar from "./Components/CustomerNavBar";
import DifferentHome from "./Components/DifferentHome";
import ErrorPage from "./Components/ErrorPage";
import Footerpage from "./Components/FooterPage";
import HomeNavbar from "./Components/HomeNavbar";
import CustomerLoginSignup from "./Components/CustomerLoginSignup";

function App() {
  return (
    <Router>
      <div>
        <HomeNavbar style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }} />
        <div style={{ paddingTop: "70px" }}>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/velvethomes" element={<CustomerNavBar />} />
            <Route exact path="/velvethomes/prodsubcat/tile" element={<Home />} />
            <Route exact path="/velvethomes/showprodcat/:id" element={<ShowProdCategory />} />
            <Route exact path="/velvethomes/showallprodsubcat/:id" element={<ShowProdSubCat />} />
            <Route exact path="/velvethomes/showproduct/:id" element={<ShowProduct />} />
            <Route exact path="/velvethomes/bill/:id" element={<BNBill />} />
            <Route exact path="/velvethomes/cart" element={<Cart />} />
            <Route exact path="/velvethomes/pinfo" element={<Pinfo />} />
            <Route exact path="/velvethomes/seller/login" element={<CompanyLogin />} />
            <Route exact path="/velvethomes/seller/home" element={<CompanyHome element="Home" />} />
            <Route exact path="/velvethomes/seller/allproducts" element={<CompanyHome element="Allprod" />} />
            <Route exact path="/velvethomes/seller/newproduct" element={<CompanyHome element="Newprod" />} />
            <Route exact path="/velvethomes/admin/login" element={<AdminLogin />} />
            <Route exact path="/velvethomes/admin/home" element={<AdminHome element="home" />} />
            <Route exact path="/velvethomes/admin/allcust" element={<AdminHome element="allcust" />} />
            <Route exact path="/velvethomes/admin/allcomp" element={<AdminHome element="allcomp" />} />
            <Route exact path="/velvethomes/admin/admindel" element={<AdminHome element="admindel" />} />
            <Route exact path="/" element={<DifferentHome />} />
            <Route exact path="/velvethomes/cust/login" element={<CustomerLoginSignup/>} />
            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footerpage />
      </div>
    </Router>
  );
}

export default App;
