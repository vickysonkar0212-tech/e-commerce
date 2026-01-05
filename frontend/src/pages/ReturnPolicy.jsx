import React from "react";


const ReturnPolicy = () => {
  return (
    <div className="container my-5">

      <div className="card shadow p-4">
        <h2 className="text-center fw-bold mb-4">Return & Refund Policy</h2>

        <p className="text-muted">
          Last updated: <strong>January 2025</strong>
        </p>

        <h4 className="fw-bold mt-4">1. Return Eligibility</h4>
        <p>
          You can return most items within <strong>7 days</strong> of delivery.
          To be eligible for a return:
        </p>
        <ul>
          <li>Item must be unused and in original condition</li>
          <li>Item must include original packaging</li>
          <li>Receipt or proof of purchase is required</li>
        </ul>

        <h4 className="fw-bold mt-4">2. Items Not Eligible for Return</h4>
        <ul>
          <li>Opened or used products</li>
          <li>Items without original packaging</li>
          <li>Customized or personalized products</li>
          <li>Clearance or final sale items</li>
        </ul>

        <h4 className="fw-bold mt-4">3. Refund Process</h4>
        <p>
          Once we receive your returned product, we will inspect it and notify
          you about the approval or rejection of your refund.
        </p>
        <p>
          If approved, refund will be processed within 
          <strong> 5–7 business days</strong> to your original payment method.
        </p>

        <h4 className="fw-bold mt-4">4. Replacement Policy</h4>
        <p>
          We offer free replacement if:
        </p>
        <ul>
          <li>The product is damaged</li>
          <li>Wrong item received</li>
          <li>Product is defective or not working</li>
        </ul>

        <h4 className="fw-bold mt-4">5. Return Shipping</h4>
        <p>
          Customers are responsible for return shipping charges unless the
          product is damaged or incorrectly delivered.
        </p>

        <h4 className="fw-bold mt-4">6. How to Request a Return</h4>
        <p>To initiate a return, follow these steps:</p>
        <ol>
          <li>Go to the “Contact Us” page</li>
          <li>Submit your order number and issue details</li>
          <li>Our team will review and respond within 24 hours</li>
        </ol>

        <h4 className="fw-bold mt-4">7. Contact Information</h4>
        <p>
          For any questions regarding returns or refunds, contact us at:
        </p>
        <p><strong>Email:</strong> support@yourstore.com</p>
        <p><strong>Phone:</strong> +91 9876543210</p>

      </div>
    </div>
  );
};

export default ReturnPolicy;
