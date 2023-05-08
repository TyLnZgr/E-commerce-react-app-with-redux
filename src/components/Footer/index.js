import React from "react";
//Mui
import { makeStyles } from "@mui/styles";
import { Button, useMediaQuery, useTheme } from "@mui/material";
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
/* import Title from "./components/Title"; */
const useStyles = makeStyles(() => ({
  footer: {
    height: ({ footerHeight }) => footerHeight,
    backgroundColor: "#0059BC",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%",
  },
  firstRow: {
    display: "flex",
    justifyContent: ({ justify }) => justify,
    width: "100%",
    marginTop: 30,
  },
  footerLeftSide: {
    width: ({ widthLeftSide }) => widthLeftSide,
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
    marginTop: 30,
  },
  search: {
    height: 38,
    width: "65%",
    border: "1px solid #000",
    position: "relative",
    borderRight: 0,
  },
  footerRightSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "40%",
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
  },
  info: {
    color: "#fff",
    fontSize: 18,
  },
  socialIcon: {
    marginLeft: 20,
  },
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
  },
  subHeader: {
    color: "#fff",
    fontSize: 18,
    marginTop: 15,
  },
}));
function Footer() {
  const theme = useTheme();
  const tabletScreen = useMediaQuery(theme.breakpoints.down("md"));
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const props = {
    justify: mobileScreen ? "flex-start" : "space-evenly",
    widthLeftSide: mobileScreen ? "60%" : "35%",
    footerHeight: mobileScreen ? 250 : 375,
  };
  const classes = useStyles(props);
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
              display: mobileScreen ? "none" : "",
            }}
          >
            Lorem ipsum dolor sit amet. Nam aliquam expedita in aliquid Quis aut
            autem enim qui consequatur quae
          </p>
          <div
            className={classes.searchBox}
            style={{ width: "100%", marginBottom: mobileScreen ? 10 : "" }}
          >
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
                width: "30%",
                height: 38,
                backgroundColor: "#00254F",
                textTransform: "capitalize",
                fontSize: mobileScreen ? 8 : tabletScreen ? 10 : 14,
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
        <div
          className={classes.footerRightSide}
          style={{ display: mobileScreen ? "none" : "" }}
        >
          {/* <Title />
          <Title />
          <Title /> */}
          <div>
            <h3 className={classes.header}>Title</h3>
            <div className={classes.subHeaderDiv}>
              <span className={classes.subHeader}>SubTitle</span>
              <span className={classes.subHeader}>SubTitle</span>
              <span className={classes.subHeader}>SubTitle</span>
              <span className={classes.subHeader}>SubTitle</span>
            </div>
          </div>
          <div style={{ display: tabletScreen ? "none" : "" }}>
            <h3 className={classes.header}>Title</h3>
            <div className={classes.subHeaderDiv}>
              <span className={classes.subHeader}>SubTitle</span>
              <span className={classes.subHeader}>SubTitle</span>
              <span className={classes.subHeader}>SubTitle</span>
              <span className={classes.subHeader}>SubTitle</span>
            </div>
          </div>
          <div style={{ display: tabletScreen ? "none" : "" }}>
            <h3 className={classes.header}>Title</h3>
            <div className={classes.subHeaderDiv}>
              <span className={classes.subHeader}>SubTitle</span>
              <span className={classes.subHeader}>SubTitle</span>
              <span className={classes.subHeader}>SubTitle</span>
              <span className={classes.subHeader}>SubTitle</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.path}></div>
      <div className={classes.secondRow}>
        <span className={classes.info}>contact@nttdata.com</span>
        <span className={classes.info}>+3 9876 765 444</span>
        <div style={{ display: mobileScreen ? "none" : "" }}>
          <img src={instagram} alt="Instagram" className={classes.socialIcon} />
          <img src={facebook} alt="Instagram" className={classes.socialIcon} />
          <img src={linkedin} alt="Instagram" className={classes.socialIcon} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
