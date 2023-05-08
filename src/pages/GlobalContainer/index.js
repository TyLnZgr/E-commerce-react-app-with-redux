import React, { useEffect } from "react";
//Redux
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/Products/ProductsSlice";
//Components
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";
import DashBoard from "../DashBoard";

function GlobalContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Slider />
      <DashBoard />
      <Footer />
    </>
  );
}

export default GlobalContainer;
