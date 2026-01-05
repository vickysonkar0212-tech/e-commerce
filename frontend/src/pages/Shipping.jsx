import React, { useState } from "react";


const ShippingInfo = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Shipping Details Submitted Successfully!");
  };

  return (
    <div className="container my-5">

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">

          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4 fw-bold">
              Shipping Information
            </h2>

            <form onSubmit={handleSubmit}>

              {/* Full Name */}
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  className="form-control"
                  placeholder="Enter your full name"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Enter phone number"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Address */}
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  name="address"
                  className="form-control"
                  placeholder="Enter your full address"
                  rows="3"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="row">
                {/* City */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder="City"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* State */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    placeholder="State"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row">
                {/* Country */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Country</label>
                  <input
                    type="text"
                    name="country"
                    className="form-control"
                    placeholder="Country"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Pincode */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Pincode / Zip Code</label>
                  <input
                    type="text"
                    name="pincode"
                    className="form-control"
                    placeholder="Postal code"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button className="btn btn-primary w-100 mt-2">
                Continue to Payment →
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ShippingInfo;
