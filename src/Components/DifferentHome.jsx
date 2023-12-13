import React, { useEffect, useState, useRef } from "react";
import "./DifferentHome.css";
import video from "./h2.mp4";
import "../../src/stylesheets/home.css";
import HomeNavbar from "./HomeNavbar";

const DifferentHome = () => {
  // const [prods, setProds] = useState([]);
  // const [showLoader, setShowLoader] = useState(true);
  // const fetchData = async () => {
  //   const response = await fetch(
  //     "http://localhost:5000/velvethomes/customer/home",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const json = await response.json();
  //   if (json.success) {
  //     setProds(json.objects);
  //     console.log(json.objects);
  //     setShowLoader(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const imagesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        const top = window.scrollY;
        if (top > 50) {
          navbar.classList.add("scroll-down");
        } else {
          navbar.classList.remove("scroll-down");
        }
      }

      imagesRef.current.forEach((img) => {
        if (img) {
          const top = img.getBoundingClientRect().top;
          if (top < window.innerHeight * 0.8) {
            img.classList.add("slide-down");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        // backgroundColor: "white",
        fontFamily: "Optima, sans-serif",
      }}
    >
      <div className="vidcon">
        <video autoPlay muted loop playsInline id="homevideo" width="100%">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1>
        <div
          className="quotes"
          style={{
            color: "black",
            marginTop: "2%",
            textDecoration: "Underline",
          }}
        >
          Experience the power of exceptional design.
        </div>
      </h1>
      {/* <HomeNavbar /> */}
      {/* <img
        src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202310030550_PB_Reliance_F23_Diwali_HP_D_02.jpg?width=1750&amp;height=658&amp;mode=fill&amp;fill=solid&amp;fill-color=FFFFFFF"
        data-src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202310030550_PB_Reliance_F23_Diwali_HP_D_02.jpg?width=1750&amp;height=658&amp;mode=fill&amp;fill=solid&amp;fill-color=FFFFFFF"
        width="100%"
        height="700"
        alt="Slider"
        className="lload img-fluid"
      /> */}
      <div
        className="products"
        style={{
          fontSize: "25px",
          padding: "10px",
          marginLeft: "4%",
          fontWeight: "bold",
        }}
      >
        OUR PRODUCTS
      </div>
      <div
        className="category"
        style={{
          display: "flex",
          padding: "10px",
          marginLeft: "4%",
          columnGap: "20px",
        }}
      >
        <div
          className="item"
          style={{
            borderRadius: "15px 15px 0 0",
          }}
        >
          <a href="/velvethomes/showprodcat/64a5955d9b3dc77cbe74db29">
            <img
              ref={(ref) => imagesRef.current.push(ref)}
              src="https://ii1.pepperfry.com/media/catalog/product/c/a/1100x1210/catherine-8-seater-dining-table-in-white-colour-by-durian-catherine-8-seater-dining-table-in-white-c-p2u9mw.jpg"
              width="335"
              height="350"
              alt="VelvetHomes"
              style={{
                borderRadius: "15px 15px 0 0",
                boxShadow: "0px 8px 6px -4px rgba(0, 0, 0, 0.5)",
              }}
              className="lload img-fluid"
            />
          </a>
          <p>Furniture </p>
        </div>
        <div
          className="item"
          style={{
            // boxShadow: "0  4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px 15px 0 0",
          }}
        >
          <a href="/velvethomes/showprodcat/64a5960c7b9dea400786c055">
            <img
              ref={(ref) => imagesRef.current.push(ref)}
              src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:450,w:500)/data/pottery-barn/23052022newimg/7910248_1.jpg"
              width="335"
              height="350"
              alt="VelvetHomes"
              className="lload img-fluid"
              style={{
                borderRadius: "15px 15px 0 0",
                boxShadow: "0px 8px 6px -4px rgba(0, 0, 0, 0.5)",
              }}
            />
          </a>
          <p>Bathroom </p>
        </div>
        <div
          className="item"
          style={{
            // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px 15px 0 0",
          }}
        >
          <a href="/velvethomes/showallprodsubcat/64aa7d3f3f89f953e9b1e8a8">
            <img
              ref={(ref) => imagesRef.current.push(ref)}
              src="https://ii1.pepperfry.com/media/catalog/product/g/r/1100x1210/grey-marble-dust-shri-hanuman-sculpture-by-yellow-verandah-grey-marble-dust-shri-hanuman-sculpture-b-yxweg2.jpg"
              width="335"
              height="350"
              alt="VelvetHomes"
              className="lload img-fluid"
              style={{
                borderRadius: "15px 15px 0 0",
                boxShadow: "0px 8px 6px -4px rgba(0, 0, 0, 0.5)",
              }}
            />
          </a>
          <p>Artifacts</p>
        </div>
        <div
          className="item"
          style={{
            // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px 15px 0 0",
          }}
        >
          <a href="/velvethomes/showprodcat/64a594174f6b05e6fe5a5545">
            <img
              ref={(ref) => imagesRef.current.push(ref)}
              src="https://somany-uat.s3.amazonaws.com/static/uploads/Tiles-Somany/Product-Thumbnail/T60506284.jpg"
              width="335"
              height="350"
              alt="VelvetHomes"
              className="lload img-fluid"
              style={{
                borderRadius: "15px 15px 0 0",
                boxShadow: "0px 8px 6px -4px rgba(0, 0, 0, 0.5)",
              }}
            />
          </a>
          <p>Tile </p>
        </div>
      </div>
      <div className="family-room-image" style={{ margin: "3% 0 2% 0" }}>
        <a
          href="https://www.potterybarn.in/potterybarn-furniture/pottery-barn-living-room-furniture"
          target="_self"
        >
          <img
            // ref={(ref) => imagesRef.current.push(ref)}
            width="100%"
            height="700"
            title="Outdoor Collections"
            alt="Outdoor Collections"
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202310030553_PB_Reliance_F23_Diwali_HP_D_08.jpg?width=1750&amp;height=665&amp;mode=fill&amp;fill=solid&amp;fill-color=FFFFFF"
            className="img-fluid lazy"
          />
        </a>
      </div>

      <div
        className="products"
        style={{
          fontSize: "30px",
          marginLeft: "4%",
          fontWeight: "bold",
        }}
      >
        <a
          href="/velvethomes/showprodcat/64a5955d9b3dc77cbe74db29"
          style={{ color: "black" }}
        >
          FURNITURE
        </a>
      </div>

      <div style={{ display: "flex", margin: "1% 0% 3% 4%", columnGap: "1%" }}>
        <div className="image">
          <a
            href="/velvethomes/showallprodsubcat/64aa7d3d3f89f953e9b1e88a"
            target="_self"
          >
            <img
              ref={(ref) => imagesRef.current.push(ref)}
              width="340"
              height="340"
              title="Outdoor Collections"
              alt="Outdoor Collections"
              src="https://ii2.pepperfry.com/media/catalog/product/m/a/1600x1760/max-coffee-table-in-choco-walnut--by-a-globia-creations-max-coffee-table-in-choco-walnut--by-a-globi-vogvsx.jpg"
              className="img-fluid lazy"
              style={{
                borderRadius: "10px",
                boxShadow: "0px 8px 6px -4px rgba(0, 0, 0, 0.5)",
              }}
            />
          </a>
          <p>Table </p>
        </div>
        <div className="image">
          <a
            href="/velvethomes/showallprodsubcat/64aa7d3d3f89f953e9b1e88c"
            target="_self"
          >
            <img
              ref={(ref) => imagesRef.current.push(ref)}
              width="340"
              height="340"
              title="Outdoor Collections"
              alt="Outdoor Collections"
              src="https://ii2.pepperfry.com/media/catalog/product/s/t/1100x1210/stalley-sheesham-wood-arm-chair-in-multicolor---honey-oak-finish-stalley-sheesham-wood-arm-chair-in--133wj0.jpg"
              className="img-fluid lazy"
              style={{
                borderRadius: "10px",
                boxShadow: "0px 8px 6px -4px rgba(0, 0, 0, 0.5)",
              }}
            />
          </a>
          <p>Chair </p>
        </div>
        <div className="image">
          <a
            href="/velvethomes/showallprodsubcat/64aa7d3e3f89f953e9b1e894"
            target="_self"
          >
            <img
              ref={(ref) => imagesRef.current.push(ref)}
              width="340"
              height="340"
              title="Outdoor Collections"
              alt="Outdoor Collections"
              src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:1240,w:1400)/data/pottery-barn/31012023img/8636062_1.jpg"
              className="img-fluid lazy"
              style={{
                borderRadius: "10px",
                boxShadow: "0px 8px 6px -4px rgba(0, 0, 0, 0.5)",
              }}
            />
          </a>
          <p>Sofa </p>
        </div>
        <div className="image">
          <a
            href="/velvethomes/showallprodsubcat/64aa7d3d3f89f953e9b1e890"
            target="_self"
          >
            <img
              ref={(ref) => imagesRef.current.push(ref)}
              width="340"
              height="340"
              title="Outdoor Collections"
              alt="Outdoor Collections"
              src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:1240,w:1400)/data/pottery-barn/13062022/8293423_1.jpg"
              className="img-fluid lazy"
              style={{
                borderRadius: "10px",
                boxShadow: "0px 8px 6px -4px rgba(0, 0, 0, 0.5)",
              }}
            />
          </a>
          <p>Dining Table </p>
        </div>
      </div>
      <div className="Artifacts-main-photo" style={{ margin: "3% 0" }}>
        <a
          href="https://www.potterybarn.in/potterybarn-furniture/pottery-barn-outdoor-furniture"
          target="_self"
        >
          <img
            width="100%"
            height="630"
            title="Outdoor Collections"
            alt="Outdoor Collections"
            className="img-fluid lazy"
            id="intersect_10"
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202310090655_PB_Reliance_Gifts_LP_D_01.jpg"
          />
        </a>
      </div>
      <div
        className="products"
        style={{
          fontSize: "30px",
          margin: "4% 0 1% 4%",
          fontWeight: "bold",
        }}
      >
        <a
          href="/velvethomes/showallprodsubcat/64aa7d3f3f89f953e9b1e8a8"
          style={{ color: "black" }}
        >
          ARTIFACTS
        </a>
      </div>
      <div style={{ display: "flex", margin: "0 4%", columnGap: "0.5%" }}>
        <div style={{ display: "block", width: "20%" }}>
          <img
            ref={(ref) => imagesRef.current.push(ref)}
            title="Shop Lamps"
            alt="Shop Lamps"
            width="100%"
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
            // height="350"
            src="https://ii3.pepperfry.com/media/catalog/product/r/a/1100x1210/radha-krishna-oil-paint-art--12-x18--stretched-and-framed-in-teakwood-art-print-by-da-monica-radha-k-siw3qc.jpg"
          />
          <p>Painting &gt;</p>
          <img
            ref={(ref) => imagesRef.current.push(ref)}
            title="Shop Sheer Curtains"
            alt="Shop Sheer Curtains"
            width="100%"
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
            // height="350"
            src="https://ii2.pepperfry.com/media/catalog/product/g/o/1100x1210/gold-silver-toned-home-sign-with-attached-yoga-lady-polyresin-figurine-by-tied-ribbons-gold-silver-t-n5anul.jpg"
          />
          <p>Sculpture &gt;</p>
        </div>
        <div style={{ display: "block", paddingLeft: "10px", width: "110%" }}>
          <video
            className="top-hero-image"
            preload="auto"
            loop
            autoPlay
            playsInline
            muted
            id="videoContent2"
            poster="https://cb2.scene7.com/is/image/CB2/gifts_D_poster?wid=1920&amp;fmt=jpg&amp;qlt=50,0"
            width="100%"
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
          >
            <source src="https://cb2.scene7.com/is/content/CB2/video/gifts_D_2.mp4" />
          </video>
        </div>
      </div>
      <div
        className="products"
        style={{
          fontSize: "30px",
          margin: "2% 4% 1% 4%",
          fontWeight: "bold",
        }}
      >
        <a
          href="/velvethomes/showprodcat/64a594174f6b05e6fe5a5545"
          style={{ color: "black" }}
        >
          TILE
        </a>
      </div>
      <div>
        <div style={{ display: "flex", columnGap: "10px", margin: " 0 4%" }}>
          <div
            className="item"
            style={{
              borderRadius: "10px",
            }}
          >
            <a href="#">
              <img
                ref={(ref) => imagesRef.current.push(ref)}
                width="100%"
                // height="450"
                alt="Image"
                className="img-fluid lload"
                src="https://www.kajariaceramics.com/concept-picture/high002621.jpg"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 8px 6px -4px rgba(0, 0, 0, 0.5)",
                }}
              />
            </a>
          </div>
          <div className="item">
            <a href="/pottery-barn-rugs-by-style">
              <img
                ref={(ref) => imagesRef.current.push(ref)}
                width="100%"
                // height="450"
                alt="Image"
                className="img-fluid lload"
                src="https://www.kajariaceramics.com/concept-picture/high002390.jpg"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 8px 6px -4px rgba(0, 0, 0, 0.5)",
                }}
              />
            </a>
          </div>
          <div className="item">
            <a href="/pottery-barn-table-lamps-66348">
              <img
                ref={(ref) => imagesRef.current.push(ref)}
                width="100%"
                // height="450"
                src="https://www.kajariaceramics.com/concept-picture/SH000203.jpg"
                alt="images"
                className="lload img-fluid"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 8px 6px -4px rgba(0, 0, 0, 0.5)",
                }}
              />
            </a>
          </div>
        </div>
        <div
          className="products"
          style={{
            fontSize: "30px",
            margin: "2% 0 1% 4%",
            fontWeight: "bold",
          }}
        >
          <a
            href="/velvethomes/showprodcat/64a5960c7b9dea400786c055"
            style={{ color: "black" }}
          >
            SANITORY
          </a>
        </div>
        <div
          style={{ display: "flex", margin: "0 4% 4% 4%", columnGap: "0.5%" }}
        >
          <div
            style={{ display: "block", paddingRight: "15px", width: "100%" }}
          >
            <img
              width="100%"
              height="530"
              src="https://cdn.pixelspray.io/v2/black-bread-289bfa/HYDUHb/wrkr/original/catalog/brandstore/potterybarn/pbsubcategorybath.png"
              alt="images"
              className="lload img-fluid"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
            />
          </div>
          <div style={{ display: "block", width: "20%" }}>
            <img
              ref={(ref) => imagesRef.current.push(ref)}
              title="Shop Lamps"
              alt="Shop Lamps"
              width="100%"
              height="220"
              src="https://cb2.scene7.com/is/image/CB2/020623_super_bedbath_2?wid=700&qlt=50"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
            />
            <p>Bathtub &gt;</p>
            <img
              ref={(ref) => imagesRef.current.push(ref)}
              title="Shop Sheer Curtains"
              alt="Shop Sheer Curtains"
              width="100%"
              height="220"
              src="https://cb2.scene7.com/is/image/CB2/090922_Super_BathBest_d?wid=700&qlt=50"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
            />
            <p>Taps &gt;</p>
          </div>
        </div>

        <div
          className="products"
          style={{
            fontSize: "30px",
            marginLeft: "4%",

            fontWeight: "bold",
          }}
        >
          <a
            href="/velvethomes/showallprodsubcat/64aa7d3f3f89f953e9b1e8aa"
            style={{ color: "black" }}
          >
            PAINTS
          </a>
        </div>
        <div
          style={{ display: "flex", margin: "1% 4% 3% 4%", columnGap: "1%" }}
        >
          <div className="image">
            <a
              href="https://www.potterybarn.in/potterybarn-kitchen-and-dining"
              target="_self"
            >
              <img
                ref={(ref) => imagesRef.current.push(ref)}
                width="100%"
                title="Outdoor Collections"
                alt="Outdoor Collections"
                src="https://www.jswpaints.in/themes/custom/jsw_theme/gallery/3564__living_room_big.jpg"
                className="img-fluid lazy"
                style={{ boxShadow: "0px 8px 6px -4px rgba(0, 0, 0, 0.5)" }}
              />
            </a>
          </div>
          <div className="image">
            <a
              href="https://www.potterybarn.in/pottery-barn-drinkware-bar"
              target="_self"
            >
              <img
                ref={(ref) => imagesRef.current.push(ref)}
                width="100%"
                // height="600"
                title="Outdoor Collections"
                alt="Outdoor Collections"
                src="https://www.jswpaints.in/themes/custom/jsw_theme/gallery/1094__bedroom_big.jpg"
                className="img-fluid lazy"
                style={{ boxShadow: "0px 8px 6px -4px rgba(0, 0, 0, 0.5)" }}
              />
            </a>
          </div>
        </div>
        {/* <div>
          <a
            href="https://my.matterport.com/show/?m=RjeBDTFbiQT&back=1"
            target="_blank"
          >
            <img
              width="100%"
              height="730"
              title="Potterybarn"
              alt="VelvetHomes"
              id="loading-background"
              src="https://cdn-2.matterport.com/apifs/models/RjeBDTFbiQT/images/RBc6aLawxcp/02.06.2023_17.52.23.jpg?t=2-bff710ac65f656d4e6cb98826192c91865c23e87-1700387341-1&k=apifs%2Fmodels%2FRjeBDTFbiQT%2Fimages%2FRBc6aLawxcp%2F02.06.2023_17.52.23.jpg&width=1536&disable=upscale&dpr=1.25"
            />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default DifferentHome;
