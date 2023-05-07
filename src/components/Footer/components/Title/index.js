import React from "react";
//Mui
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  header: {
    fontSize: 24,
    color: "#fff",
    fontWeight: 500,
    marginTop: "15px",
  },
  subHeaderDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 15,
  },
  subHeader: {
    color: "#fff",
    fontSize: 18,
    marginTop: 15,
  },
}));
function Title() {
  const classes = useStyles();
  return (
    <div>
      <h3 className={classes.header}>Title</h3>
      <div className={classes.subHeaderDiv}>
        <span className={classes.subHeader}>SubTitle</span>
        <span className={classes.subHeader}>SubTitle</span>
        <span className={classes.subHeader}>SubTitle</span>
        <span className={classes.subHeader}>SubTitle</span>
      </div>
    </div>
  );
}

export default Title;
