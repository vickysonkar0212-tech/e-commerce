import { useCart } from "../context/cartcontext";

const OrderHistory = () => {
  const { orderHistory } = useCart();

  if (orderHistory.length === 0) {
    return <h3 className="text-center mt-5">No Orders Yet 😕</h3>;
  }

  return (
    <div className="container my-5">
      <h3>📦 Order History</h3>

      {orderHistory.map((order) => (
        <div key={order.id} className="card p-3 mb-3">
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Date:</strong> {order.date}</p>
          <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
          <p><strong>Total Paid:</strong> ₹{order.amount}</p>

          <hr />

          {order.items.map((item) => (
            <p key={item.id}>
              {item.name} × {item.quantity}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
