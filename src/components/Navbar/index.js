import React, { useState } from "react";
//Mui
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
//Dummy Data
import { DUMMY_NAVBAR_ITEM } from "./data/data";
//Png
import boxImage from "../../utils/assets/boxImage.png";
const useStyles = makeStyles(() => ({
  navbar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    listStyleType: "none",
  },
  listItem: {
    fontSize: 14,
    cursor: "pointer",
    paddingBottom: 7,
  },
  boxContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  boxHeader: { display: "flex", flexDirection: "column", marginLeft: 15 },
  boxSpan: {
    marginBottom: 7,
    fontSize: 14,
  },
}));

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [openBox, setOpenBox] = useState(false);
  const classes = useStyles();
  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        {DUMMY_NAVBAR_ITEM?.map((item) => (
          <li
            key={item.id}
            className={classes.listItem}
            onClick={() => {
              setIsActive(`active${item?.id}item`);
              setOpenBox(true);
            }}
            style={{
              borderBottom:
                isActive == `active${item?.id}item` ? "3px solid blue" : "none",
            }}
          >
            {item.name}
          </li>
        ))}
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
              <img src={boxImage} alt="Box image" width={950} height={240} />
            </div>
          </Box>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
