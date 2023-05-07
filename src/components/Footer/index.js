import React from "react";
//Mui
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
//Png
import n from "../../utils/assets/nW.png";
import t from "../../utils/assets/tW.png";
import d from "../../utils/assets/dW.png";
import a from "../../utils/assets/aW.png";
//Social Icon
import facebook from "../../utils/assets/facebook.png";
import instagram from "../../utils/assets/instagram.png";
import linkedin from "../../utils/assets/linkedin.png";
//components
import Title from "./components/Title";

const useStyles = makeStyles(() => ({
  footer: {
    height: 400,
    backgroundColor: "#0059BC",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 35,
  },
  firstRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 55,
  },
  footerLeftSide: {
    width: "35%",
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
  },
  favIcon: {
    display: "flex",
  },
  favIconImg: {
    width: 26,
    height: 24,
    marginLeft: 2,
  },
  searchBox: {
    marginTop: 40,
  },
  search: {
    height: 38,
    width: "70%",
    border: "1px solid #000",
    position: "relative",
    borderRight: 0,
  },
  footerRightSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "50%",
  },
  path: {
    height: 2,
    background: "#D9D9D9",
    width: "100%",
  },
  secondRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 40,
  },
  info: {
    color: "#fff",
    fontSize: 18,
  },
  socialIcon: {
    marginLeft: 20,
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.firstRow}>
        <div className={classes.footerLeftSide}>
          <div className={classes.favIcon}>
            <img src={n} alt="N" className={classes.favIconImg} />
            <img src={t} alt="T" className={classes.favIconImg} />
            <img src={t} alt="T" className={classes.favIconImg} />
            <img src={d} alt="D" className={classes.favIconImg} />
            <img src={a} alt="A" className={classes.favIconImg} />
            <img src={t} alt="T" className={classes.favIconImg} />
            <img src={a} alt="A" className={classes.favIconImg} />
          </div>
          <span style={{ color: "#fff", marginTop: 4, fontSize: 13 }}>
            Trusted Global Innovator
          </span>
          <p
            style={{
              color: "#fff",
              marginTop: 25,
              fontWeight: 400,
              fontSize: 16,
            }}
          >
            Lorem ipsum dolor sit amet. Nam aliquam expedita in aliquid Quis aut
            autem enim qui consequatur quae
          </p>
          <div className={classes.searchBox}>
            <input
              type="text"
              name=""
              value=""
              placeholder="Email"
              className={classes.search}
            />
            <Button
              variant="contained"
              sx={{
                width: 100,
                height: 38,
                backgroundColor: "#00254F",
                textTransform: "capitalize",
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
        <div className={classes.footerRightSide}>
          <Title />
          <Title />
          <Title />
        </div>
      </div>
      <div className={classes.path}></div>
      <div className={classes.secondRow}>
        <span className={classes.info}>contact@nttdata.com</span>
        <span className={classes.info}>+3 9876 765 444</span>
        <div>
          <img src={instagram} alt="Instagram" className={classes.socialIcon} />
          <img src={facebook} alt="Instagram" className={classes.socialIcon} />
          <img src={linkedin} alt="Instagram" className={classes.socialIcon} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;