import React, { useState } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  addFavoriteItems,
  removeFavoriteItems,
} from "../../../../redux/Products/ProductsSlice";
//Mui
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
//png
import favorite from "../../../../utils/assets/favorite.png";
import likeImg from "../../../../utils/assets/like.png";
import likeRed from "../../../../utils/assets/likeRed.png";
//helpers
import currencyFormat from "../../../../helpers/currencyFormat";
//Shared Components
import Loader from "../../../../components/Shared/Loader";
import Card from "../../../../components/Shared/Card";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  link: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    textDecoration: "none",
    zIndex: 10,
    backgroundColor: "#FFF",
    opacity: 0,
    filter: "alpha((opacity = 1))",
  },
  containerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 150,
    marginRight: 150,
    marginBottom: 15,
  },
  containerProduct: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginLeft: 140,
    marginRight: 140,
    marginBottom: 15,
  },
  likedProdcts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 170,
  },
  proHeader: {
    display: "block",
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 8,
    marginTop: 5,
  },
  proPrice: {
    display: "block",
    width: 265,
    backgroundColor: "#E6EEF8",
    color: "#00254F",
  },
  proDes: {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    marginTop: 8,
  },
  description: {
    fontSize: 12,
    color: "#00254F",
  },
  readMore: {
    marginLeft: 5,
    color: "blue",
    textDecoration: "underline",
    letterSpacing: "1px",
    cursor: "pointer",
  },
  likeProduct: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 24,
    height: 24,
    background: "#FFFFFF",
    borderRadius: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 24,
  },
  card: {
    position: "relative",
  },
  like: {
    marginTop: 2,
    cursor: "pointer",
    width: 14,
    height: 14,
  },
}));
function Products() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const isLoading = useSelector((state) => state.products.isLoading);
  const products = useSelector((state) => state.products.items);
  const favoriteItems = useSelector((state) => state.products.favoriteItems);
  const [screenFavoriteScreen, setScreenFavoriteScreen] = useState(false);
  const [isFavorite, setIsFavorite] = useState({});
  const [readMore, setReadMore] = useState(true);

  const showFullDescriptionHandler = () => {
    setReadMore(!readMore);
  };
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
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={classes.container}>
      <div className={classes.containerHeader}>
        <h1>Content title goes here</h1>
        <div className={classes.likedProdcts}>
          <img src={favorite} alt="Favorite icon" height={18} width={20} />
          <span>{favoriteItems.length} Ürün</span>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "capitalize", height: 22 }}
            onClick={() => setScreenFavoriteScreen(!screenFavoriteScreen)}
            disabled={favoriteItems.length < 1}
          >
            Beğenilenler
          </Button>
        </div>
      </div>
      <div className={`${classes.containerProduct}`}>
        {!screenFavoriteScreen
          ? products?.map((product, index) => (
              <Card className={classes.card} key={product.id}>
                <a href="http://www.google.com" className={classes.link} />
                <img
                  src={product?.imageUrl}
                  alt="product Image"
                  width={260}
                  height={180}
                />
                <span className={classes.proHeader}>{product?.name}</span>
                <span className={classes.proPrice}>
                  {currencyFormat(Number(product?.price))} TL
                </span>
                <span className={classes.proDes}>Description</span>
                <p className={classes.description}>
                  {readMore
                    ? product?.description?.slice(0, 50)
                    : product?.description}
                  <span
                    onClick={showFullDescriptionHandler}
                    className={classes.readMore}
                  >
                    {readMore ? "...Devamını gör" : " Kısalt"}
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
            ))
          : favoriteItems?.map((product, index) => (
              <Card className={classes.card} key={product.id}>
                <a href="http://www.google.com" className={classes.link} />
                <img
                  src={product?.imageUrl}
                  alt="product Image"
                  width={260}
                  height={180}
                />
                <span className={classes.proHeader}>{product?.name}</span>
                <span className={classes.proPrice}>
                  {currencyFormat(Number(product?.price))} TL
                </span>
                <span className={classes.proDes}>Description</span>
                <p className={classes.description}>
                  {readMore
                    ? product?.description?.slice(0, 50)
                    : product?.description}
                  <span
                    onClick={showFullDescriptionHandler}
                    className={classes.readMore}
                  >
                    {readMore ? "...Devamını gör" : " Kısalt"}
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
            ))}
      </div>
    </div>
  );
}

export default Products;