import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles(() => ({
  navbar: {
    width: "100%",
    display: ({ displayNavbar }) => displayNavbar,
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
  dropdown: {
    listStyleType: "none",
    textDecoration: "none",
    fontSize: 16,
    display: "block",
    color: "#000",
    position: "relative",
    marginLeft: "-15px",
  },
  listItem: {
    position: "relative",
    display: "block",
    backgroundColor: "#F4F5F6",
  },
  listBox: {
    position: "absolute",
    display: ({ displayDropdown }) => displayDropdown,
    top: 30,
    left: 10,
    width: 100,
    border: "1px solid #e2e2e2",
    backgroundColor: "#F4F5F6",
    zIndex: 100,
    padding: 2,
    textAlign: "center",
  },
}));
