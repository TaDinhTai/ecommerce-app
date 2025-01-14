const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRouter = require("./routes/auth/auth.route");
const adminProductsRouter = require("./routes/admin/products.route");
const adminOrderRouter = require("./routes/admin/order.route");

const shopProductsRouter = require("./routes/shop/products.route");
const shopCartRouter = require("./routes/shop/cart.route");
const shopAddressRouter = require("./routes/shop/address.router");
const shopOrderRouter = require("./routes/shop/order.route");
const shopSearchRouter = require("./routes/shop/search.router");

mongoose
  .connect("mongodb://localhost:27017/ECommerce")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}!`));