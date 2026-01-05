import React from "react";

const Support = () => {
  const faqList = [
    "How can I return a product?",
    "How long does shipping take?",
    "Where can I track my order?",
    "How to contact customer care?"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Support request submitted successfully!");
  };

  return (
    <div className="container my-5">
      <div className="row g-4">

        {/* Left Section - Contact Form */}
        <div className="col-lg-6">
          <div className="card shadow p-4">
            <h3 className="fw-bold mb-4 text-center">Need Support?</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Issue subject" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Describe your issue" required></textarea>
              </div>
              <button className="btn btn-primary w-100">Submit Request</button>
            </form>
          </div>
        </div>

        {/* Right Section - FAQ & Contact Info */}
        <div className="col-lg-6">
          <div className="card shadow p-4">
            <h3 className="fw-bold mb-4 text-center">Help Center</h3>
            
            <h5 className="fw-bold">Frequently Asked Questions</h5>
            <ul className="list-group mb-4">
              {faqList.map((q, index) => (
                <li key={index} className="list-group-item">{q}</li>
              ))}
            </ul>

            <h5 className="fw-bold">Contact Us</h5>
            <p className="mb-1"><strong>Email:</strong> support@yourstore.com</p>
            <p className="mb-1"><strong>Phone:</strong> +91 9876543210</p>
            <p className="mb-1"><strong>Support Hours:</strong> 9 AM - 7 PM (Mon–Sat)</p>

            <div className="mt-3">
              <strong>Address:</strong>
              <p>
                Your Store Pvt. Ltd.<br />
                2nd Floor, MG Road,<br />
                Delhi, India - 110001
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Support;
