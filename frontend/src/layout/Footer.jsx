import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">

          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase mb-3">MyShop</h5>
            <p>Best products at the best prices.</p>
            <p className="mb-1"><i className="bi bi-envelope"></i> support@myshop.com</p>
            <p><i className="bi bi-telephone"></i> +91 98765 43210</p>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/shop" className="text-light text-decoration-none">Shop</Link></li>
              <li><Link to="/offer" className="text-light text-decoration-none">Offers</Link></li>
              <li><Link to="/blog" className="text-light text-decoration-none">Blog</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase mb-3">Customer Service</h5>
            <ul className="list-unstyled">
              <li><Link to="/faqs" className="text-light text-decoration-none">FAQs</Link></li>
              <li><Link to="/shipping" className="text-light text-decoration-none">Shipping Info</Link></li>
              <li><Link to="/returnpolicy" className="text-light text-decoration-none">Return Policy</Link></li>
              <li><Link to="/tracking" className="text-light text-decoration-none">Order Tracking</Link></li>
              <li><Link to="/support" className="text-light text-decoration-none">Support</Link></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase mb-3">Follow Us</h5>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-outline-light btn-sm">Facebook</a>
              <a href="#" className="btn btn-outline-light btn-sm">Instagram</a>
              <a href="#" className="btn btn-outline-light btn-sm">Twitter</a>
            </div>
          </div>

        </div>

        <div className="text-center mt-4 pt-3 border-top">
          <p className="mb-0">© 2025 MyShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
