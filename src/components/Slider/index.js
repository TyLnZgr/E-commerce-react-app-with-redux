import SimpleImageSlider from "react-simple-image-slider";
//png
import slider from "../../utils/assets/slider.png";
import slider2 from "../../utils/assets/slider2.png";
import slider3 from "../../utils/assets/slider3.png";
import slider4 from "../../utils/assets/slider4.png";
//Mui
import { makeStyles } from "@mui/styles";
import { useMediaQuery, useTheme } from "@mui/material";

const images = [
  { url: slider },
  { url: slider2 },
  { url: slider3 },
  { url: slider4 },
];
const useStyles = makeStyles(() => ({
  backdrop: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 58,
    background: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(.2px)",
  },
}));
function Slider() {
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <div style={{ position: "relative" }}>
      <SimpleImageSlider
        width="100%"
        height={mobileScreen ? 250 : 450}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
      <div className={classes.backdrop}></div>
    </div>
  );
}

export default Slider;
