import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { Navigate } from "react-router-dom";

function Header() {
  const [_basket, dispatch] = useStateValue();
  const basket = _basket?.basket;
  // const basketCount = basket?.length || 0;
  // console.log("aaaa",basket);
  const navigate = useNavigate();
  const Logout = () => {
    window.localStorage.removeItem("isLogedIn");
    navigate("/Login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="text-decoration-none d-flex">
            <i className="bi bi-shop-window fs-4 text-warning me-2"></i>{" "}
            <a className="navbar-brand" href="#">
              eShop
            </a>
          </Link>
          <div className="input-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Search.."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append bg-warning">
              <span className="input-group-text bg-warning" id="basic-addon2">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mt-2 ms-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link active d-flex flex-column" href="#">
                  <small>Hi,Guest</small>
                  {/* <Link to="/login" className="text-decoration-none text-white"><strong style={{ fontSize: "11px" }}>Logout</strong></Link>  */}
                  <strong onClick={() => Logout()}>Logout</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active d-flex flex-column" href="#">
                  <small>Your</small>
                  <Link to="/Home" className="text-decoration-none text-white">
                    {" "}
                    <strong> Home</strong>
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active d-flex" to="/Checkout">
                  <i className="bi bi-cart4" style={{ fontSize: "30px" }}></i>

                  <span className="mt-1">
                    <strong
                      class="dot"
                      style={{
                        textAlign: "center",
                        height: "24px",
                        width: "16px",

                        backgroundColor: "#bbb",
                        borderRadius: "47%",
                        display: "inline-block",
                      }}
                    >
                      {basket?.length}
                    </strong>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
