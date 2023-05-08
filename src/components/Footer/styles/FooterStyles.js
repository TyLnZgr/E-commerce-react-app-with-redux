import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles(() => ({
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
