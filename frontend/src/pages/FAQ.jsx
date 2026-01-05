import React from "react";


const FAQ = () => {
  return (
    <div className="container my-5">

      <div className="card shadow p-4">
        <h2 className="fw-bold text-center mb-4">Frequently Asked Questions</h2>

        {/* Bootstrap Accordion */}
        <div className="accordion" id="faqAccordion">

          {/* Question 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#answer1"
              >
                How can I track my order?
              </button>
            </h2>
            <div
              id="answer1"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Go to the <strong>Track Order</strong> page and enter your Order ID to check your order status.
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#answer2"
              >
                What is your return policy?
              </button>
            </h2>
            <div
              id="answer2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can return products within <strong>7 days</strong> of delivery as long as the product is unused and in its original packaging.
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#answer3"
              >
                How long does delivery take?
              </button>
            </h2>
            <div
              id="answer3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Delivery usually takes <strong>3–7 business days</strong> depending on your location.
              </div>
            </div>
          </div>

          {/* Question 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#answer4"
              >
                How can I contact customer support?
              </button>
            </h2>
            <div
              id="answer4"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can contact us via email at <strong>support@yourstore.com</strong>  
                or call us at <strong>+91 9876543210</strong>.
              </div>
            </div>
          </div>

          {/* Question 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#answer5"
              >
                Do you offer replacement for damaged products?
              </button>
            </h2>
            <div
              id="answer5"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes! If the product is defective or damaged, we offer a <strong>free replacement</strong>.
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default FAQ;
