import React, { useState } from "react";
//Redux
import { useSelector } from "react-redux";
//Mui
import { Button, useTheme, useMediaQuery } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
//png
import favorite from "../../../../utils/assets/favorite.png";
//Shared Components
import Loader from "../../../../components/Shared/Loader";
//css
import { useStyles } from "./styles/ProductsStyles";
import ProductList from "../ProductList";

function Products() {
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const tableScreen = useMediaQuery(theme.breakpoints.down("md"));
  const props = {
    leftLike: mobileScreen ? 10 : 150,
  };
  const classes = useStyles(props);
  const isLoading = useSelector((state) => state.products.isLoading);
  const products = useSelector((state) => state.products.items);
  const favoriteItems = useSelector((state) => state.products.favoriteItems);
  const [screenFavoriteScreen, setScreenFavoriteScreen] = useState(false);
  const [showMoreProduct, setShowMoreProduct] = useState(false);
  const [readMore, setReadMore] = useState({});
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
              <ProductList
                product={product}
                key={product?.id}
                showMoreProduct={showMoreProduct}
                setReadMore={setReadMore}
                readMore={readMore}
              />
            ))
          ) : mobileScreen ? (
            products
              .slice(0, 1)
              ?.map((product, index) => (
                <ProductList
                  product={product}
                  key={product?.id}
                  showMoreProduct={showMoreProduct}
                  setReadMore={setReadMore}
                  readMore={readMore}
                />
              ))
          ) : (
            products
              .slice(0, 4)
              ?.map((product, index) => (
                <ProductList
                  product={product}
                  key={product?.id}
                  showMoreProduct={showMoreProduct}
                  setReadMore={setReadMore}
                  readMore={readMore}
                />
              ))
          )
        ) : favoriteItems.length >= 1 ? (
          favoriteItems?.map((product, index) => (
            <ProductList
              product={product}
              key={product?.id}
              showMoreProduct={showMoreProduct}
              setReadMore={setReadMore}
              readMore={readMore}
            />
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
          disabled={screenFavoriteScreen && favoriteItems.length <= 4}
        >
          {!showMoreProduct ? "Daha Fazla" : "Daha Az"}
        </Button>
      )}
    </div>
  );
}

export default Products;
