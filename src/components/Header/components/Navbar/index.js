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
//components
import SubHeader from "../Navbar/components/SubHeader";
function Navbar() {
  const theme = useTheme();
  const tableScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [openDropdown, setOpenDropdown] = useState(false);
  const props = {
    displayDropdown: openDropdown ? "block" : "none",
  };
  const [isActive, setIsActive] = useState(false);
  const [openBox, setOpenBox] = useState(false);
  const classes = useStyles(props);
  const handleListItem = (data) => {
    if (tableScreen) {
      return (
        <>
          {data.slice(0, 5)?.map((item) => (
            <li
              key={item.id}
              className={classes.listItem}
              onClick={() => {
                setIsActive(`active${item?.id}item`);
                setOpenBox(!openBox);
              }}
              style={{
                borderBottom:
                  isActive == `active${item?.id}item`
                    ? "3px solid blue"
                    : "none",
              }}
            >
              {item.name}
            </li>
          ))}
          <ul className={classes.dropdown}>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              More
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
    } else {
      return data?.map((item) => (
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
    }
  };
  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        {handleListItem(DUMMY_NAVBAR_ITEM)}
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
                <SubHeader />
              </div>
              <div className={classes.boxHeader}>
                <SubHeader />
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
