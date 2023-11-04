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

function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/velvethomes" element={<CustomerNavBar/>} />    
            <Route exact path="/velvethomes/prodsubcat/tile" element={<Home/>} />
            <Route exact path="/velvethomes/showprodcat/:id" element={<ShowProdCategory/>}/>
            <Route exact path="/velvethomes/showallprodsubcat/:id" element={<ShowProdSubCat/>}/>
            <Route exact path="/velvethomes/showproduct/:id" element={<ShowProduct/>}/>
            <Route exact path="/velvethomes/bill/:id" element={<BNBill/>}/>
            <Route exact path="/velvethomes/cart" element={<Cart/>}/>
            <Route exact path="/velvethomes/pinfo" element={<Pinfo/>}/>
            <Route exact path="/velvethomes/seller/login" element={<CompanyLogin/>} />
            <Route exact path="/velvethomes/seller/home" element={<CompanyHome element="Home"/>} />
            <Route exact path="/velvethomes/seller/allproducts" element={<CompanyHome element="Allprod"/>} />
            <Route exact path="/velvethomes/seller/newproduct" element={<CompanyHome element="Newprod"/>} />
            <Route exact path="/velvethomes/admin/login" element={<AdminLogin/>}/>
            <Route exact path="/velvethomes/admin/home" element={<AdminHome element="home"/>}/>
            <Route exact path="/velvethomes/admin/allcust" element={<AdminHome element="allcust"/>}/>
            <Route exact path="/velvethomes/admin/allcomp" element={<AdminHome element="allcomp"/>}/>
            <Route exact path="/velvethomes/admin/admindel" element={<AdminHome element="admindel"/>}/>
          </Routes>
      </div>  
    </Router>
  );
}

export default App;
