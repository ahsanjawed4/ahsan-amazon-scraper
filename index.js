//console.log("ahsan jaweds");
const express = require("express");
const request = require("request-promise");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
//const API__KEY = `323bf33397e3e50a815e6cf1c5f94fc7`;
//const BASE__URL=`http://api.scraperapi.com?api_key=${API__KEY}&autoparse=true`
const return__Scraper__API__Query = (API__KEY) =>
  `http://api.scraperapi.com?api_key=${API__KEY}&autoparse=true`;
// welcome routes
app.get("/", (request, response) => {
  response.send("<h1>Welcome to Amazon Scraper API by Ashoo</h1>");
});
// get products
app.get("/products/:productId", async (req, res) => {
  const { productId } = req.params;
  const { API__KEY } = req.query;
  try {
    const response = await request(
      `${return__Scraper__API__Query(
        API__KEY
      )}&url=https://www.amazon.com/dp/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});
// get product reviews
app.get("/products/:productId/reviews", async (req, res) => {
  const { productId } = req.params;
  const { API__KEY } = req.query;
  try {
    const response = await request(
      `${return__Scraper__API__Query(
        API__KEY
      )}&url=https://www.amazon.com/product-reviews/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});
// get product offers
app.get("/products/:productId/offers", async (req, res) => {
  const { productId } = req.params;
  const { API__KEY } = req.query;
  try {
    const response = await request(
      `${return__Scraper__API__Query(
        API__KEY
      )}&url=https://www.amazon.com/gp/offer-listing/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});
// get search query
app.get("/search/:searchQuery", async (req, res) => {
  const { searchQuery } = req.params;
  const { API__KEY } = req.query;
  try {
    const response = await request(
      `${return__Scraper__API__Query(
        API__KEY
      )}&url=https://www.amazon.com/s?k=${searchQuery}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});
app.listen(PORT, () => console.log(`app is running on the Port no ${PORT}`));
