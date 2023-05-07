import React from "react";
import ErrorPage from "../ErrorPage";
import Products from "./components/Products";
import { useSelector } from "react-redux";
function DashBoard() {
  const error = useSelector((state) => state.products.error);
  return <>{error === "" ? <Products /> : <ErrorPage />}</>;
}

export default DashBoard;
