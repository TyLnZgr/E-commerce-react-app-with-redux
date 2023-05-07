import React from "react";
//Mui
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
//Png
import n from "../../utils/assets/n.png";
import t from "../../utils/assets/t.png";
import d from "../../utils/assets/d.png";
import a from "../../utils/assets/a_1_.png";
//React-Select
import Select from "react-select";
import { Button } from "@mui/material";
const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
  },
  favIcon: {
    display: "flex",
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
    width: "60%",
    marginRight: 200,
  },
  search: {
    borderRadius: 4,
    height: 40,
    padding: 5,
    width: "70%",
    border: "1px solid #000",
    position: "relative",
    borderRight: 0,
  },
  select: {
    position: "absolute",
  },
}));
const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#D9D9D9",
    border: "1px solid #000",
    borderLeft: "1px solid #D9D9D9",
    marginLeft: "-15px",
    boxShadow: "none",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
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
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.favIcon}>
        <img src={n} alt="N" className={classes.favIconImg} />
        <img src={t} alt="T" className={classes.favIconImg} />
        <img src={t} alt="T" className={classes.favIconImg} />
        <img src={d} alt="D" className={classes.favIconImg} />
        <img src={a} alt="A" className={classes.favIconImg} />
        <img src={t} alt="T" className={classes.favIconImg} />
        <img src={a} alt="A" className={classes.favIconImg} />
      </div>
      <div className={classes.searchBox}>
        <input
          type="text"
          name=""
          value=""
          placeholder="Search.."
          className={classes.search}
        />
        <Select
          className={classes.select}
          placeholder="Categories"
          styles={customStyles}
          options={options}
        />
        <Button variant="contained" sx={{ width: 110, height: 40 }}>
          <SearchIcon />
        </Button>
      </div>
    </header>
  );
}

export default Header;
