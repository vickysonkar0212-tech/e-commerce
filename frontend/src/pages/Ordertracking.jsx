import React, { useState } from "react";
import { useCart } from "../context/cartcontext";

const OrderTracking = () => {
  const { orderHistory } = useCart();
  const [orderId, setOrderId] = useState("");
  const [tracking, setTracking] = useState(null);

  const checkStatus = (e) => {
    e.preventDefault();

    const order = orderHistory.find(
      (o) => String(o.id) === orderId.trim()
    );

    if (order) {
      setTracking(order.status);
    } else {
      setTracking("notfound");
    }
  };

  const progressPercent = {
    0: 25,
    1: 50,
    2: 75,
    3: 100,
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow p-4">

            <h2 className="text-center fw-bold mb-4">Track Your Order</h2>

            <form onSubmit={checkStatus}>
              <input
                className="form-control mb-3"
                placeholder="Enter Order ID"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                required
              />
              <button className="btn btn-primary w-100">
                Track Order
              </button>
            </form>

            {tracking === "notfound" && (
              <p className="text-danger text-center mt-4 fw-bold">
                ❌ Order Not Found
              </p>
            )}

            {tracking !== null && tracking !== "notfound" && (
              <div className="mt-4">

                <div className="progress mb-4">
                  <div
                    className="progress-bar"
                    style={{ width: `${progressPercent[tracking]}%` }}
                  >
                    {progressPercent[tracking]}%
                  </div>
                </div>

                <ul className="list-group">
                  <li className={`list-group-item ${tracking >= 0 && "bg-success text-white"}`}>
                    ✓ Order Placed
                  </li>
                  <li className={`list-group-item ${tracking >= 1 && "bg-success text-white"}`}>
                   <a href="/shipping"> ✓ Shipped </a> 
                  </li>
                  <li className={`list-group-item ${tracking >= 2 && "bg-success text-white"}`}>
                    ✓ Out for Delivery
                  </li>
                  <li className={`list-group-item ${tracking >= 3 && "bg-success text-white"}`}>
                    ✓ Delivered
                  </li>
                </ul>

              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
