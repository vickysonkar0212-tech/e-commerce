const Contact = () => {
  return (
    <>
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-muted">We’d love to hear from you!</p>
      </div>

      <div className="row g-4">

        <div className="col-md-7">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="mb-3">Send Message</h4>

              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name"/>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="Enter your email"/>
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-control" placeholder="Enter subject"/>
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea rows="5" className="form-control" placeholder="Type your message..."></textarea>
                </div>

                <button type="submit" className="btn btn-dark w-100">Send Message</button>
              </form>

            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="mb-3">Contact Information</h4>

              <p><i className="bi bi-geo-alt-fill me-2"></i>
                <strong>Address:</strong> 123 Market Street, Haryana, India
              </p>

              <p><i className="bi bi-envelope-fill me-2"></i>
                <strong>Email:</strong> support@myshop.com
              </p>

              <p><i className="bi bi-telephone-fill me-2"></i>
                <strong>Phone:</strong> +91 98765 43210
              </p>

              <p><i className="bi bi-clock-fill me-2"></i>
                <strong>Working Hours:</strong> Mon - Sat: 9am to 7pm
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-5">
        <h4 className="mb-3">Find Us on Map</h4>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447873.2745640009!2d75.5958401640625!3d29.23847800473079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00bd303b6d3%3A0xf52a0ccee0d7b341!2sHaryana!5e0!3m2!1sen!2sin!4v1700000000001"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
