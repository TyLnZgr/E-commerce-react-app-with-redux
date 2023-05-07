import React, { useEffect } from "react";
//Redux
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/Products/ProductsSlice";
//Components
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";
import DashBoard from "../DashBoard";

function GlobalContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <div style={{ height: 1, width: "100%", background: "#89919A" }}></div>
      <Navbar />
      <Slider />
      <DashBoard />
      <Footer />
    </div>
  );
}

export default GlobalContainer;
