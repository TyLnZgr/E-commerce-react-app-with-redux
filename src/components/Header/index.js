import React, { useState } from "react";
//Mui
import SearchIcon from "@mui/icons-material/Search";
import { Button, useMediaQuery, useTheme } from "@mui/material";
//Png
import n from "../../utils/assets/n.png";
import t from "../../utils/assets/t.png";
import d from "../../utils/assets/d.png";
import a from "../../utils/assets/a_1_.png";
//React-Select
import Select from "react-select";
import Navbar from "./components/Navbar";
import { MobileNavbar } from "./components/MobileNavbar";
//css
import { customStyles, useStyles } from "./styles/HeaderStyles";
const options = [
  { value: "1", label: "Data" },
  { value: "2", label: "Category" },
  { value: "3", label: "Category" },
  { value: "4", label: "Category" },
  { value: "5", label: "Category" },
];
function Header() {
  const [searchProduct, setSearchProduct] = useState("");
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const props = {
    headerFlexDirection: mobileScreen ? "column" : "row",
    borderRight: mobileScreen ? "" : 0,
    searchWidth: mobileScreen ? "90%" : "75%",
    searchBox: mobileScreen ? "90%" : "60%",
    firstRowJus: mobileScreen ? "space-between" : "space-around",
  };
  const classes = useStyles(props);
  return (
    <header className={classes.header}>
      <div className={classes.firstRow}>
        <div
          className={classes.favIcon}
          style={{ marginBottom: mobileScreen ? 13 : 0 }}
        >
          <img src={n} alt="N" className={classes.favIconImg} />
          <img src={t} alt="T" className={classes.favIconImg} />
          <img src={t} alt="T" className={classes.favIconImg} />
          <img src={d} alt="D" className={classes.favIconImg} />
          <img src={a} alt="A" className={classes.favIconImg} />
          <img src={t} alt="T" className={classes.favIconImg} />
          <img
            src={a}
            alt="A"
            className={classes.favIconImg}
            style={{ marginRight: mobileScreen ? 120 : 0 }}
          />
          {mobileScreen && <MobileNavbar />}
        </div>
        <div
          className={classes.searchBox}
          style={{ marginBottom: mobileScreen ? 5 : 0 }}
        >
          <input
            type="text"
            name="Search"
            value={searchProduct}
            placeholder="Search.."
            className={classes.search}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
          {!mobileScreen && (
            <Select
              className={classes.select}
              placeholder="Categories"
              styles={customStyles}
              options={options}
            />
          )}
          <Button
            variant="contained"
            sx={{ width: 110, height: 37, marginLeft: 2 }}
          >
            <SearchIcon />
          </Button>
        </div>
      </div>
      {!mobileScreen && (
        <>
          <div
            style={{ height: 1, width: "100%", background: "#89919A" }}
          ></div>
          <Navbar />
        </>
      )}
    </header>
  );
}

export default Header;
