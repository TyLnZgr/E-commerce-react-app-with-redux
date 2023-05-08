import React, { useState } from "react";
//Mui
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";
//Dummy Data
import { DUMMY_NAVBAR_ITEM } from "./data/data";
//Png
import boxImage from "../../../../utils/assets/boxImage.png";
import expandLess from "../../../../utils/assets/expandLess.png";
import expandMore from "../../../../utils/assets/expandMore.png";
//css
import { useStyles } from "./styles/NavbarStyles";

function Navbar() {
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const tableScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [openDropdown, setOpenDropdown] = useState(false);
  const props = {
    displayDropdown: openDropdown ? "block" : "none",
  };
  const [isActive, setIsActive] = useState(false);
  const [openBox, setOpenBox] = useState(false);
  const classes = useStyles(props);
  let contentDesktop = DUMMY_NAVBAR_ITEM?.map((item) => (
    <li
      key={item.id}
      className={classes.listItem}
      onClick={() => {
        setIsActive(`active${item?.id}item`);
        setOpenBox(!openBox);
      }}
      style={{
        borderBottom:
          isActive == `active${item?.id}item` ? "3px solid blue" : "none",
      }}
    >
      {item.name}
    </li>
  ));
  let contentTablet = (
    <>
      <li
        style={{
          borderBottom: isActive ? "3px solid blue" : "",
        }}
        onClick={() => {
          setIsActive(!isActive);
          setOpenBox(!openBox);
        }}
      >
        Menu Item
      </li>
      <li
        style={{
          borderBottom: isActive ? "3px solid blue" : "",
        }}
        onClick={() => {
          setIsActive(!isActive);
          setOpenBox(!openBox);
        }}
      >
        Menu Item
      </li>
      <li
        style={{
          borderBottom: isActive ? "3px solid blue" : "",
        }}
        onClick={() => {
          setIsActive(!isActive);
          setOpenBox(!openBox);
        }}
      >
        Menu Item
      </li>
      <li
        style={{
          borderBottom: isActive ? "3px solid blue" : "",
        }}
        onClick={() => {
          setIsActive(!isActive);
          setOpenBox(!openBox);
        }}
      >
        Menu Item
      </li>
      <li
        style={{
          borderBottom: isActive ? "3px solid blue" : "",
        }}
        onClick={() => {
          setIsActive(!isActive);
          setOpenBox(!openBox);
        }}
      >
        Menu Item
      </li>
      <li
        style={{
          borderBottom: isActive ? "3px solid blue" : " ",
        }}
        onClick={() => {
          setIsActive(!isActive);
          setOpenBox(!openBox);
        }}
      >
        Menu Item
      </li>
      <ul className={classes.dropdown}>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          More{" "}
          <img
            src={!openDropdown ? expandMore : expandLess}
            style={{ marginLeft: 2 }}
            width={12}
          />
          <ul className={classes.listBox}>
            <li className={classes.listItem}>Menu Item</li>
            <li className={classes.listItem}>Menu Item</li>
            <li className={classes.listItem}>Menu Item</li>
          </ul>
        </li>
      </ul>
    </>
  );
  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        {tableScreen ? contentTablet : contentDesktop}
        {openBox && (
          <Box
            sx={{
              width: "90%",
              height: 300,
              backgroundColor: "#F4F5F6",
              position: "absolute",
              top: 125,
              padding: 3,
              zIndex: 100,
            }}
          >
            <div className={classes.boxContainer}>
              <div className={classes.boxHeader}>
                <span
                  className={classes.boxSpan}
                  style={{ fontWeight: "bold" }}
                >
                  Header
                </span>
                <span className={classes.boxSpan}>SubHeader</span>
                <span className={classes.boxSpan}>SubHeader</span>
                <span className={classes.boxSpan}>SubHeader</span>
                <span className={classes.boxSpan}>SubHeader</span>
                <span className={classes.boxSpan}>SubHeader</span>
                <span className={classes.boxSpan}>SubHeader</span>
                <span className={classes.boxSpan}>SubHeader</span>
                <span className={classes.boxSpan}>SubHeader</span>
              </div>
              <div className={classes.boxHeader}>
                <span
                  className={classes.boxSpan}
                  style={{ fontWeight: "bold" }}
                >
                  Header
                </span>
                <span className={classes.boxSpan}>SubHeader</span>
                <span className={classes.boxSpan}>SubHeader</span>
                <span className={classes.boxSpan}>SubHeader</span>
                <span className={classes.boxSpan}>SubHeader</span>
                <span className={classes.boxSpan}>SubHeader</span>
                <span className={classes.boxSpan}>SubHeader</span>
                <span className={classes.boxSpan}>SubHeader</span>
                <span className={classes.boxSpan}>SubHeader</span>
              </div>
              <img
                src={boxImage}
                alt="Box image"
                width={tableScreen ? 400 : 950}
                height={240}
              />
            </div>
          </Box>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
