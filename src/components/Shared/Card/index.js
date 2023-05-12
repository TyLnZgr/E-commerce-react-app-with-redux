import React from "react";
//Mui
import { makeStyles } from "@mui/styles";
import { useMediaQuery, useTheme } from "@mui/material";

const useStyles = makeStyles(() => ({
  card: {
    width: ({ cardWidth }) => cardWidth,
    padding: 15,
    background: "white",
    border: "1px solid #d7dad9",
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 15,
    position: "relative",
    minHeight: 375,
  },
}));

const Card = ({ className, children }) => {
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const tableScreen = useMediaQuery(theme.breakpoints.down("md"));
  const props = {
    cardWidth: mobileScreen ? 200 : tableScreen ? 144 : 260,
  };
  const classes = useStyles(props);

  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
