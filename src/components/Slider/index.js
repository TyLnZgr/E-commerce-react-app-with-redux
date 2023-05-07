import SimpleImageSlider from "react-simple-image-slider";
//png
import slider from "../../utils/assets/slider.png";
import slider2 from "../../utils/assets/slider2.png";
import slider3 from "../../utils/assets/slider3.png";
//Mui
import { makeStyles } from "@mui/styles";

const images = [{ url: slider }, { url: slider2 }, { url: slider3 }];
const useStyles = makeStyles(() => ({
  backdrop: {
    position: "absolute",
    bottom: 165,
    width: "100%",
    height: 58,
    background: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(.2px)",
  },
}));
function Slider() {
  const classes = useStyles();
  return (
    <div>
      <SimpleImageSlider
        width="100%"
        height={450}
        images={images}
        showBullets={true}
        showNavs={false}
        autoPlay={true}
      />
      <div className={classes.backdrop}></div>
    </div>
  );
}

export default Slider;
