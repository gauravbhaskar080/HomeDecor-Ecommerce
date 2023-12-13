import React from "react";
import "../stylesheets/CompanyNavBar.css";
import logo from "../Components/logo.jpeg";
import { useNavigate } from "react-router-dom";

export default function AdminNavBar({ navTitle }) {
  const navigate = useNavigate();
  const redirectTo = (u) => {
    navigate(u);
  };
  return (
    <div className="cm-nav" style={{ backgroundColor: "#fff" }}>
      <div
        className="comp-nav-head"
        style={{
          backgroundColor: "#000000",
          marginTop: "0px",
          borderRadius: "0px",
          width: "100%",
        }}
      >
        <img src={logo} alt="" />
        <div className="comp-nav-head-item">Velvet Homes</div>
      </div>
      <div
        onClick={() => redirectTo("/velvethomes/admin/home")}
        className={
          navTitle === "home"
            ? "comp-nav-item comp-nav-item-selected ad-nav-item ad-nav-item-selected"
            : "comp-nav-item ad-nav-item"
        }
      >
        Home
      </div>
      <div
        onClick={() => redirectTo("/velvethomes/admin/allcust")}
        className={
          navTitle === "allcust"
            ? "comp-nav-item comp-nav-item-selected ad-nav-item ad-nav-item-selected"
            : "comp-nav-item ad-nav-item"
        }
      >
        All Customers
      </div>
      <div
        onClick={() => redirectTo("/velvethomes/admin/allcomp")}
        className={
          navTitle === "allcomp"
            ? "comp-nav-item comp-nav-item-selected ad-nav-item ad-nav-item-selected"
            : "comp-nav-item ad-nav-item"
        }
      >
        All Companies
      </div>
      <div
        onClick={() => redirectTo("/velvethomes/admin/admindel")}
        className={
          navTitle === "admindel"
            ? "comp-nav-item comp-nav-item-selected ad-nav-item ad-nav-item-selected"
            : "comp-nav-item ad-nav-item"
        }
      >
        Deliveries
      </div>
      <img
        src="https://thumbs.dreamstime.com/b/admin-office-binder-wooden-desk-table-colored-pencil-pencils-pen-notebook-paper-79046621.jpg"
        className="CompNavImg"
        alt=""
      />
      <div className="comp-nav-item comp-nav-logout ad-nav-logout">Logout</div>
    </div>
  );
}
