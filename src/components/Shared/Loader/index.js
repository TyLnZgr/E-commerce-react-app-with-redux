import React from "react";
import spinner from "../../../utils/assets/Loading_icon.gif";
//Mui
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  loading: {
    display: "block",
    margin: "auto",
  },
}));
const Loader = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <img src={spinner} className={classes.loading} alt="Loading" />
      {children}
    </>
  );
};

export default Loader;
