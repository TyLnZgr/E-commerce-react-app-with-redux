import axios from "axios";

const get_products = () => {
  return axios.get("https://honey-badgers-ecommerce.glitch.me/products");
};

export default {
  get_products,
};
