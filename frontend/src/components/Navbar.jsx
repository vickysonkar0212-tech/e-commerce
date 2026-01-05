import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accesstoken");
    navigate("/login");
    window.location.reload(); // simple refresh
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-bag"></i> MERN SHOP
        </Link>

        <div className="collapse navbar-collapse">

          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center gap-3">

            {/* ✅ IF USER LOGGED IN */}
            {user ? (
              <>
                {/* User first letter */}
                <div
                  className="rounded-circle bg-light text-dark fw-bold d-flex align-items-center justify-content-center"
                  style={{ width: "35px", height: "35px" }}
                >
                  {user.name?.charAt(0).toUpperCase()}
                </div>

                <button
                  onClick={handleLogout}
                  className="btn btn-outline-light"
                >
                  Logout
                </button>
              </>
            ) : (
              /* ❌ IF NOT LOGGED IN */
              <Link to="/login" className="btn btn-outline-light">
                <i className="bi bi-person"></i> Login
              </Link>
            )}

            <Link to="/carthistory" className="position-relative">
              <i className="bi bi-cart fs-4 text-white"></i>
              <span className="cart-badge">3</span>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
