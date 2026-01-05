const express = require("express");
const {
  saveCart,
  getCart,
  clearCart,
} = require("../controller/Cartcontroller");

const router = express.Router();

router.post("/save", saveCart);          // save/update cart
router.get("/:userId", getCart);         // get cart
router.delete("/:userId", clearCart);    // clear cart after order

module.exports = router;
