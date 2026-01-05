// import { useCart } from "../context/cartcontext";

// const Cart = () => {
//   const { cart, removeFromCart } = useCart();

//   if (cart.length === 0) {
//     return <h3 className="text-center mt-5">Cart is Empty 😕</h3>;
//   }

//   return (
//     <div className="container my-5">
//       <h3 className="mb-4">🛒 Your Cart</h3>

//       {cart.map((item) => (
//         <div key={item.id} className="card mb-3 p-3">
//           <h5>{item.name}</h5>
//           <p>Price: ₹{item.pricePerKg}</p>
//           <p>Quantity: {item.quantity}</p>

//           <button
//             className="btn btn-danger btn-sm"
//             onClick={() => removeFromCart(item.id)}
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;


import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartcontext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <h3 className="text-center mt-5">Cart is Empty 😕</h3>;
  }

  const totalPrice = cart.reduce(
    (total, item) =>
      total + (item.pricePerKg || item.price) * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <h3 className="mb-4">🛒 Your Cart</h3>

      {cart.map((item) => (
        <div key={item.id} className="card mb-3 p-3">
          <h5>{item.name}</h5>
          <p>Price: ₹{item.pricePerKg || item.price}</p>

          {/* Quantity controls */}
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => decreaseQty(item.id)}
            >
              −
            </button>

            <span>{item.quantity}</span>

            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => increaseQty(item.id)}
            >
              +
            </button>
          </div>

          <button
            className="btn btn-danger btn-sm mt-2"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h5 className="mt-3">Total: ₹{totalPrice}</h5>

      <div className="d-flex gap-3 mt-4">
        <button
          className="btn btn-outline-dark"
          onClick={() => navigate("/")}
        >
          ⬅ Continue Shopping
        </button>

        <button
          className="btn btn-success"
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout ➡
        </button>
      </div>
    </div>
  );
};

export default Cart;
