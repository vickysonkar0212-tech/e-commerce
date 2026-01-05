import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartcontext";

const Checkout = () => {
  const { cart, placeOrder } = useCart();
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);

  // Customer
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // Payment
  const [payment, setPayment] = useState(""); // COD or ONLINE
  const [upiApp, setUpiApp] = useState("");
  const [paymentDone, setPaymentDone] = useState(false);
  const [onlineAmount, setOnlineAmount] = useState(""); // 🆕 Online payment amount

  // Errors
  const [errors, setErrors] = useState({});

  // Form validation
  const validate = () => {
    const newErrors = {};

    if (!customer.name.trim()) newErrors.name = "Name is required";
    if (!/^[0-9]{10}$/.test(customer.phone))
      newErrors.phone = "Enter valid 10 digit phone number";
    if (!customer.address.trim()) newErrors.address = "Address is required";
    if (!payment) newErrors.payment = "Select payment method";

    if (payment === "ONLINE") {
      if (!upiApp) newErrors.upiApp = "Select UPI App";
      if (!onlineAmount || Number(onlineAmount) <= 0)
        newErrors.onlineAmount = "Enter valid payment amount";
      if (!paymentDone) newErrors.paymentDone = "Complete the UPI payment";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentSuccess = () => {
    setPaymentDone(true);
  };

  const handlePlaceOrder = () => {
    if (!validate()) return;

    const totalAmount =
      payment === "ONLINE" ? Number(onlineAmount) : cart.reduce(
        (total, item) => total + (item.pricePerKg || item.price) * item.quantity,
        0
      );

    placeOrder(
      payment === "COD" ? "Cash on Delivery" : `UPI (${upiApp})`,
      totalAmount
    );

    setSuccess(true);
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  if (cart.length === 0 && !success) {
    return <h3 className="text-center mt-5">No items to checkout 😕</h3>;
  }

  return (
    <div className="container my-5">
      <h3>Checkout</h3>

      {success ? (
       <div className="alert alert-success text-center">
  <h4>🎉 Order Confirmed!</h4>
  <p>✅ Payment completed successfully</p>
  <p>We’re preparing your order 🚚</p>
</div>
    
      ) : (
        <>
          {/* Customer Details */}
          <div className="card p-3 mb-3">
            <h5>Customer Details</h5>
            <input
              className="form-control mb-1"
              placeholder="Full Name"
              name="name"
              value={customer.name}
              onChange={handleCustomerChange}
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}

            <input
              className="form-control mt-2 mb-1"
              placeholder="Phone Number"
              name="phone"
              value={customer.phone}
              onChange={handleCustomerChange}
            />
            {errors.phone && (
              <small className="text-danger">{errors.phone}</small>
            )}

            <textarea
              className="form-control mt-2 mb-1"
              placeholder="Delivery Address"
              name="address"
              value={customer.address}
              onChange={handleCustomerChange}
            />
            {errors.address && (
              <small className="text-danger">{errors.address}</small>
            )}
          </div>

          {/* Payment Method */}
          <div className="card p-3 mb-3">
            <h5>Payment Method</h5>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="payment"
                onChange={() => setPayment("COD")}
              />
              <label className="form-check-label">Cash on Delivery</label>
            </div>

            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="payment"
                onChange={() => setPayment("ONLINE")}
              />
              <label className="form-check-label">Online Payment (UPI)</label>
            </div>

            {errors.payment && (
              <small className="text-danger d-block">{errors.payment}</small>
            )}
          </div>

          {/* Online Payment */}
          {payment === "ONLINE" && (
            <div className="card p-3 mb-3">
              <h5>UPI Payment</h5>

              {/* Select UPI App */}
              {["Google Pay", "PhonePe", "Paytm"].map((app) => (
                <button
                  key={app}
                  className={`btn btn-outline-primary me-2 mb-2 ${
                    upiApp === app ? "active" : ""
                  }`}
                  onClick={() => setUpiApp(app)}
                >
                  {app}
                </button>
              ))}
              {errors.upiApp && (
                <small className="text-danger d-block">{errors.upiApp}</small>
              )}

              {/* Enter Amount */}
              <input
                type="number"
                className="form-control mb-2 mt-2"
                placeholder="Enter Payment Amount"
                value={onlineAmount}
                onChange={(e) => setOnlineAmount(e.target.value)}
              />
              {errors.onlineAmount && (
                <small className="text-danger d-block">{errors.onlineAmount}</small>
              )}

              {/* Scanner */}
              {upiApp && (
                <div className="text-center mt-3">
                  <div
                    style={{
                      width: 200,
                      height: 200,
                      border: "2px dashed #333",
                      margin: "10px auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    📷 QR CODE
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={handlePaymentSuccess}
                  >
                    Payment Successful
                  </button>

                  {errors.paymentDone && (
                    <small className="text-danger d-block mt-1">
                      {errors.paymentDone}
                    </small>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Order Summary */}
          <div className="card p-3 mb-3">
            <h5>Order Summary</h5>
            {cart.map((item) => (
              <p key={item.id}>
                {item.name} × {item.quantity}
              </p>
            ))}
          </div>

          {/* Place Order Button */}
          <button
            className="btn btn-success w-100"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
    