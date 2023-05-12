import React, { useState } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  addFavoriteItems,
  removeFavoriteItems,
} from "../../../../redux/Products/ProductsSlice";
//Mui
import { Button, useTheme, useMediaQuery } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
//png
import favorite from "../../../../utils/assets/favorite.png";
import likeImg from "../../../../utils/assets/like.png";
import likeRed from "../../../../utils/assets/likeRed.png";
//helpers
import currencyFormat from "../../../../helpers/currencyFormat";
//Shared Components
import Loader from "../../../../components/Shared/Loader";
import Card from "../../../../components/Shared/Card";
//css
import { useStyles } from "./styles/ProductsStyles";

function Products() {
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const tableScreen = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const props = {
    leftLike: mobileScreen ? 10 : 150,
  };
  const classes = useStyles(props);
  const isLoading = useSelector((state) => state.products.isLoading);
  const products = useSelector((state) => state.products.items);
  const favoriteItems = useSelector((state) => state.products.favoriteItems);
  const [screenFavoriteScreen, setScreenFavoriteScreen] = useState(false);
  const [isFavorite, setIsFavorite] = useState({});
  const [readMore, setReadMore] = useState({});
  const [showMoreProduct, setShowMoreProduct] = useState(false);
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
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={classes.container}>
      <div className={classes.containerHeader}>
        <h1
          style={{
            fontSize: mobileScreen ? 16 : tableScreen ? 24 : 32,
          }}
        >
          Content title goes here
        </h1>
        <div className={classes.likedProdcts}>
          <img src={favorite} alt="Favorite icon" height={18} width={20} />
          <span>{favoriteItems.length} Ürün</span>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "capitalize", height: 22 }}
            onClick={() => setScreenFavoriteScreen(!screenFavoriteScreen)}
          >
            {!screenFavoriteScreen ? "Beğenilenler" : "Tüm Ürünler"}
          </Button>
        </div>
      </div>
      <div className={`${classes.containerProduct}`}>
        {!screenFavoriteScreen ? (
          showMoreProduct ? (
            products?.map((product, index) => (
              <Card
                className={classes.card}
                key={product.id}
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
                    {readMore[product.id] ? "Kısalt" : " ...Devamını gör"}
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
          ) : mobileScreen ? (
            products.slice(0, 1)?.map((product, index) => (
              <Card
                className={classes.card}
                key={product.id}
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
            ))
          ) : (
            products.slice(0, 4)?.map((product, index) => (
              <Card
                className={classes.card}
                key={product.id}
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
                    {readMore[product.id] ? "Kısalt" : " ...Devamını gör"}
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
          )
        ) : favoriteItems.length >= 1 ? (
          favoriteItems?.map((product, index) => (
            <Card className={classes.card} key={product.id}>
              <a href="http://www.google.com" className={classes.link} />
              <img
                src={product?.imageUrl}
                alt="product Image"
                width={"98%"}
                height={"30%"}
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
                  {readMore[product.id] ? "Kısalt" : " ...Devamını gör"}
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
        ) : (
          <p>Beğendiğiniz bir ürün bulunmamaktadır</p>
        )}
      </div>
      {(favoriteItems.length >= 1 || !screenFavoriteScreen) && (
        <Button
          variant="contained"
          endIcon={<ArrowRightAltIcon color="white" />}
          sx={{
            width: 195,
            height: 50,
            margin: "0 auto",
            textTransform: "capitalize",
          }}
          onClick={() => setShowMoreProduct(!showMoreProduct)}
        >
          {!showMoreProduct ? "Daha Fazla" : "Daha Az"}
        </Button>
      )}
    </div>
  );
}

export default Products;
