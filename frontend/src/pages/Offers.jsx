import React from "react";
const Offer = () => {
  return (
    <div className="bg-light">

      <section className="bg-dark text-light text-center py-5">
        <h1 className="fw-bold">Exclusive Offers</h1>
        <p className="text-muted">Grab the best deals before they're gone!</p>
      </section>

      <div className="container py-5">
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card text-center shadow-sm border-0">
              <div className="card-body">
                <h2 className="text-danger fw-bold">50% OFF</h2>
                <p className="text-muted">On Fashion & Apparel</p>
                <button className="btn btn-dark w-100">Shop Now</button>
              </div>
            </div>
          </div>
          {/* ... other offer cards */}
        </div>
      </div>

    </div>
  );
};
export default Offer