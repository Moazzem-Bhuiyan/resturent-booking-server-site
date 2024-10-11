import express from "express";
import userRoutes from "./module/user/user.route.js";

export const app = express();

const errorHandeler = (err, req, res, next) => {
  console.log(err),
    res.status(err.statuds || 500).json({
      success: false,
      message: err?.message || "something went wrong",
    });

  next();
};

app.use(express.json())

app.use(errorHandeler);

app.use("/api",userRoutes);

app.get("/", (req, res) => {
  res.send("Server is ruuning ");
});

export default app;
