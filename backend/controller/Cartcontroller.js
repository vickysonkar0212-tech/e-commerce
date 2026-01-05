const Cart = require("../model/Cartmodel");

// ✅ SAVE OR UPDATE CART
exports.saveCart = async (req, res) => {
  try {
    const { userId, items } = req.body;

    if (!userId || !items) {
      return res.status(400).json({
        success: false,
        message: "userId and items are required",
      });
    }

    let cart = await Cart.findOne({ userId });

    if (cart) {
      // Update existing cart
      cart.items = items;
      await cart.save();
    } else {
      // Create new cart
      cart = await Cart.create({
        userId,
        items,
      });
    }

    res.status(200).json({
      success: true,
      message: "Cart saved successfully",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// ✅ GET CART BY USER ID
exports.getCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// ✅ CLEAR CART (AFTER ORDER)
exports.clearCart = async (req, res) => {
  try {
    const { userId } = req.params;

    await Cart.findOneAndDelete({ userId });

    res.status(200).json({
      success: true,
      message: "Cart cleared successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
