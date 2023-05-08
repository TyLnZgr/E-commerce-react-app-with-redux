import React from "react";
//Mui
import { makeStyles } from "@mui/styles";
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

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  firstRow: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: ({ headerFlexDirection }) => headerFlexDirection,
    justifyContent: "space-around",
    marginBottom: 10,
    marginTop: 10,
  },
  favIcon: {
    marginLeft: 20,
  },
  favIconImg: {
    width: 26,
    height: 24,
    marginLeft: 1,
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: ({ searchBox }) => searchBox,
  },
  search: {
    borderRadius: 4,
    height: 38,
    padding: 5,
    width: ({ searchWidth }) => searchWidth,
    border: "1px solid #000",
    position: "relative",
    borderRight: ({ borderRight }) => borderRight,
  },
  select: {
    position: "absolute",
  },
  listItem: {
    fontSize: 14,
    cursor: "pointer",
    paddingBottom: 7,
    listStyleType: "none",
  },
}));
const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#D9D9D9",
    border: "1px solid #000",
    borderLeft: "1px solid #D9D9D9",
    boxShadow: "none",
    marginLeft: "-15px",
  }),
  indicatorSeparator: (base) => ({
    ...base,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#000",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: "#00254F",
    color: "#fff",
    cursor: "pointer",
    padding: 10,
    "&:hover": {
      backgroundColor: "#0059BC",
      color: "#fff",
    },
  }),
};
const options = [
  { value: "1", label: "Data" },
  { value: "2", label: "Category" },
  { value: "3", label: "Category" },
  { value: "4", label: "Category" },
  { value: "5", label: "Category" },
];
function Header() {
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
            name=""
            value=""
            placeholder="Search.."
            className={classes.search}
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
