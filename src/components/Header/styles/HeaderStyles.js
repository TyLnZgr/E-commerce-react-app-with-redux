import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles(() => ({
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
export const customStyles = {
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
