import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addFavoriteItems,
  removeFavoriteItems,
} from "../../../../redux/Products/ProductsSlice";
//Shared Components
import Card from "../../../../components/Shared/Card";
//css
import { useStyles } from "../Products/styles/ProductsStyles";
//png
import likeImg from "../../../../utils/assets/like.png";
import likeRed from "../../../../utils/assets/likeRed.png";
//MUI
import { useMediaQuery, useTheme } from "@mui/material";
//helpers
import currencyFormat from "../../../../helpers/currencyFormat";
function ProductList({ product, key, showMoreProduct, readMore, setReadMore }) {
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const tableScreen = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState({});

  const props = {
    leftLike: mobileScreen ? 10 : 150,
  };
  const classes = useStyles(props);
  const handleAddFavorite = (product) => {
    dispatch(addFavoriteItems(product));
  };
  const handleRemoveFavorite = (productId) => {
    dispatch(removeFavoriteItems(productId));
  };
  const handleFavorite = (id) => {
    setIsFavorite({
      ...isFavorite,
      [id]: !isFavorite[id],
    });
  };
  const handleaReadMore = (id) => {
    setReadMore({
      ...readMore,
      [id]: !readMore[id],
    });
  };
  return (
    <Card
      className={classes.card}
      key={key}
      style={{ display: showMoreProduct ? "" : "none" }}
    >
      <a href="http://www.google.com" className={classes.link} />
      <img
        src={product?.imageUrl}
        alt="product Image"
        width={"99%"}
        height={"50%"}
      />
      <span className={classes.proHeader}>{product?.name}</span>
      <span className={classes.proPrice}>
        {currencyFormat(Number(product?.price))} TL
      </span>
      <span className={classes.proDes}>Description</span>
      <p className={classes.description}>
        {!readMore[product.id]
          ? tableScreen
            ? product?.description?.slice(0, 10)
            : product?.description?.slice(0, 50)
          : product?.description}
        <span
          onClick={() => handleaReadMore(product.id)}
          className={classes.readMore}
        >
          {readMore[product?.id] ? "Kısalt" : " ...Devamını gör"}
        </span>
      </p>
      <span style={{ fontSize: 10 }}>{product?.shippingMethod}</span>
      <div className={classes.likeProduct}>
        <img
          src={isFavorite[product.id] ? likeRed : likeImg}
          alt="Like"
          className={classes.like}
          onClick={() => {
            handleFavorite(product.id);
            if (isFavorite[product.id]) {
              handleRemoveFavorite(product?.id);
            } else {
              handleAddFavorite(product);
            }
          }}
        />
      </div>
    </Card>
  );
}

export default ProductList;
