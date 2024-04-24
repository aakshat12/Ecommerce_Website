import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";
import { Carousel } from "antd";

const contentStyle = {
  height: "100px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Home = () => {
  return (
    <>
      <Header />

      <div className="hero">
        <Carousel autoplay>
          <div>
            <img
              src="/Assests/slider1.jpg"
              alt=""
              className="w-100"
              style={{ height: "450px" }}
            />
          </div>
          <div>
            <img
              src="/Assests/slider2.jpeg"
              alt=""
              className="w-100 "
              style={{ height: "450px" }}
            />
          </div>
          <div>
            <img
              src="/Assests/slider3.jpg"
              alt=""
              className="w-100"
              style={{ height: "450px" }}
            />
          </div>
          <div>
            <img
              src="/Assests/slider4.jpg"
              alt=""
              className="w-100"
              style={{ height: "450px" }}
            />
          </div>
        </Carousel>

        {/* <div className="w-100"> */}

        {/* <div className="card-img-overlay">
          <h5 className="card-title display-4" style={{lineHeight:"10.2",height:'334px'}}>New Season Arrival</h5>
          <p className="card-text">
          CHECK OUT ALL THE TREND
          </p>
         
        </div> */}
        {/* </div> */}
        <div className="products bg-light p-3 ">
          <div className="p-3 d-flex">
            <div className="w-50 p-2 bg-white m-2 col">
              <Products
                id={1974}
                title="Frontech gaming pc Intel Core i5 (16 GB / 512 GB / Windows 11) Assembled Desktop Computer  "
                price={35000}
                image={"pc.jpg"}
                rating={3}
              />
            </div>
            <div className="w-50 p-2 bg-white m-2 col">
              <Products
                id={567}
                title="Pro Gaming laptop Slate5MR 241i Intel i5 11400F 37 GHz Gece GTX 1050 Ti 4GB 8GB DDR4"
                price={155590}
                image={"pc1.jpg"}
                rating={4}
              />
            </div>
          </div>
          <div className="p-3 d-flex">
            <div className="w-50 p-2 bg-white m-2 col d-flex flex-column align-items-center">
              <Products
                id={124}
                title="Vintage A1100G-5"
                price={9995}
                image={"watch.jpg"}
                rating={5}
                style={{ height: "180px" }}
              />
            </div>
            <div className="w-50 bg-white m-2 col d-flex flex-column align-items-center">
              <Products
                id={1456}
                title="Standard Chronograph"
                price={11995}
                image={"watch1.jpg"}
                rating={5}
                style={{ height: "180px" }}
              />
            </div>
            <div className="w-50 bg-white m-2 col d-flex flex-column align-items-center">
              <Products
                id={1674}
                title="GRAND COURT CLOUDFOAM COMFORT SHOES"
                price={7999}
                image={"shoes.jpg"}
                rating={4}
                style={{ height: "180px" }}
              />
            </div>
          </div>

          <div className="p-3 d-flex">
            <div className="w-50 p-2 bg-white m-2 col">
              <Products
                id={1234}
                title="Nike Air Max 90 GORE-TEX
                Men's Shoes"
                price={11999}
                image={"shoes2.jpg"}
                rating={5}
              />
            </div>
            <div className="w-50  p-2 bg-white m-1 col">
              <Products
                id={1234}
                title="Triumph Dri Fit Cricket Jersey T Shirt, Packing "
                price={1299}
                image={"T-shirt1.jpg"}
                rating={3}
              />
            </div>
            <div className="w-50  p-2 bg-white m-2 col">
              <Products
                id={1984}
                title="Cricket Polo Collar Sports Jersey for Men with Team Name"
                price={1299}
                image={"T-shirt.jpg"}
                rating={3}
              />
            </div>
            <div className="w-50  p-2 bg-white m-2 col">
              <Products
                id={123}
                title="Dennis Lingo Men's Solid Slim Fit Cotton Casual Shirt "
                price={1999}
                image={"shirt.jpg"}
                rating={4}
              />
            </div>
            <div className="w-50  p-2 bg-white m-2 col">
              <Products
                id={234}
                title="Black and Red Designer Gaming Chair"
                price={9499}
                image={"chair1.jpg"}
                rating={3}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
