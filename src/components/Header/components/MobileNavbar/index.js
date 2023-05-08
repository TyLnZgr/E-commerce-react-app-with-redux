import React, { useState } from "react";
import { AppBar, Toolbar, styled, Drawer, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <MenuIcon
        sx={{ color: "#000", fontSize: "24px" }}
        onClick={toggleDrawer}
      />
      <Drawer
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          sx: { width: "100%", paddingTop: 5, paddingLeft: 2 },
        }}
      >
        <Box style={{ width: "100%" }}>
          <div
            onClick={() => {
              setOpen(false);
            }}
            style={{
              borderBottom: "1px solid #f4f4f4",
              cursor: "pointer",
              marginBottom: 10,
              color: "#000",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Category 1
          </div>
          <div
            onClick={() => {
              setOpen(false);
            }}
            style={{
              borderBottom: "1px solid #f4f4f4",
              cursor: "pointer",
              marginBottom: 10,
              color: "#000",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Category 2
          </div>
          <div
            onClick={() => {
              setOpen(false);
            }}
            style={{
              borderBottom: "1px solid #f4f4f4",
              cursor: "pointer",
              marginBottom: 10,
              color: "#000",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Category 3
          </div>
          <div
            onClick={() => {
              setOpen(false);
            }}
            style={{
              borderBottom: "1px solid #f4f4f4",
              cursor: "pointer",
              marginBottom: 5,
              color: "#000",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Category 4
          </div>
        </Box>
      </Drawer>
    </>
  );
};
