import React from "react";
//Mui
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  card: {
    width: 290,
    padding: 15,
    background: "white",
    border: "1px solid #d7dad9",
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 15,
    position: "relative",
  },
}));

const Card = ({ className, children }) => {
  const classes = useStyles();
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
