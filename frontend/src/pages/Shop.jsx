import React from "react";

const Shop = () => {
  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="bg-dark text-light text-center py-5">
        <h1 className="fw-bold">Our Products</h1>
        <p className="text-muted">Find the best products at unbeatable prices.</p>
      </section>
      <div className="container py-5">
        <div className="row g-4">
          <aside className="col-md-3">
            <div className="card shadow-sm">
              <div className="card-header bg-dark text-white">
                <h5 className="mb-0">Filters</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label fw-bold">Search</label>
                  <input type="text" className="form-control" placeholder="Search product..." />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Category</label>
                  <select className="form-select">
                    <option>All</option>
                    <option>Fruits</option>
                    <option>Vegetables</option>
                    <option>Grocery</option>
                    <option>Softdrins</option>
                    <option>Energydrinks</option>
                    <option>Mineral Water</option>
                    <option>Bakery Products</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Price Range</label>
                  <input type="range" className="form-range" min="0" max="10000" />
                </div>
                <button className="btn btn-dark w-100">Apply Filters</button>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="col-md-9">
            <div className="row g-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="col-md-4">
                  <div className="card shadow-sm">
                    <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Product" />
                    <div className="card-body">
                      <h5 className="card-title">Product Name</h5>
                      <p className="card-text text-muted">₹999</p>
                      <button className="btn btn-dark w-100">Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="mt-4 d-flex justify-content-center">
              <nav>
                <ul className="pagination">
                  <li className="page-item disabled"><a className="page-link">Previous</a></li>
                  <li className="page-item active"><a className="page-link">1</a></li>
                  <li className="page-item"><a className="page-link">2</a></li>
                  <li className="page-item"><a className="page-link">3</a></li>
                  <li className="page-item"><a className="page-link">Next</a></li>
                </ul>
              </nav>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default Shop;



// const Shop = () => {


//   const products = [
//     { id: 1, name: "Product 1", price: 999 },
//     { id: 2, name: "Product 2", price: 1299 },
//     { id: 3, name: "Product 3", price: 799 },
//   ];

//   return (
//     <div className="container my-4">
//       <div className="row g-4">
//         {products.map((item) => (
//           <div key={item.id} className="col-md-4">
//             <div className="card shadow-sm">
//               <img
//                 src="https://via.placeholder.com/400x300"
//                 className="card-img-top"
//                 alt="Product"
//               />
//               <div className="card-body">
//                 <h5>{item.name}</h5>
//                 <p className="text-muted">₹{item.price}</p>
//                 <button
//                   className="btn btn-dark w-100"
//                   onClick={() => addToCart(item)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;
