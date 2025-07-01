import { Router } from "express";
import { products } from "../constants/index.mjs";

const router = Router();

router.get("/solar-products", (req, res) => {
  res.send(products);
});

router.get("/solar-products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((item) => item._id === productId);

  if (!productId) {
    return res.status(404).json({ message: "Single Solar Product was not found" });
  }
  res.send(product);
});

export default router;
