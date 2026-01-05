// import { Link } from "react-router-dom";
// import fruits from '../pages/data/fruits'
// import vegetables from "./data/vegetables";
// const Home = () => {
//   return (
//     <>
//  <section className="bg-dark text-light text-center p-5">
//         <h1 className="fw-bold">Fresh Fruits & Vegetables</h1>
//         <p className="lead">100% Organic & Delivered To Your Doorstep</p>
//         <Link to="/shop" className="btn btn-success btn-lg">
//           Shop Now <i className="bi bi-arrow-right"></i>
//         </Link>
//       </section>
//       <section className="container py-5">
//         <h2 className="mb-4 fw-bold">🍎 Fresh Fruits</h2>
//         <div className="row g-4">
//           {fruits.map((fruit) => (
//             <div key={fruit.id} className="col-md-3 col-sm-6">
//               <div className="card product-card shadow-sm">
//                 <img
//                   src={fruit.image}
//                   className="card-img-top"
//                   alt={fruit.name}
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title">{fruit.name}</h5>
//                   <p className="text-success fw-bold">₹{fruit.pricePerKg} / kg</p>
//                   <p className="text-muted">{fruit.quality}</p>
//                   <button className="btn btn-dark btn-sm">
//                     Add to Cart <i className="bi bi-cart"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="container py-5">
//         <h2 className="mb-4 fw-bold">🥕 Fresh Vegetables</h2>
//         <div className="row g-4">
//           {vegetables.map((veg) => (
//             <div key={veg.id} className="col-md-3 col-sm-6">
//               <div className="card product-card shadow-sm">
//                 <img
//                   src={veg.image}
//                   className="card-img-top"
//                   alt={veg.name}
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title">{veg.name}</h5>
//                   <p className="text-success fw-bold">₹{veg.pricePerKg} / kg</p>
//                   <p className="text-muted">{veg.quality}</p>
//                   <button className="btn btn-dark btn-sm">
//                     Add to Cart <i className="bi bi-cart"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }
// export default Home



import React from "react";
import { Link } from "react-router-dom";

// Import data
import fruits from "../pages/data/fruits";
import vegetables from "../pages/data/vegetables";
import grocery from "../pages/data/grocery";
import mineralWater from "../pages/data/minerals";
import softDrinks from "../pages/data/softdrinks";
import energyDrinks from "../pages/data/energydrink";
import bakery from "../pages/data/bakery"

// Import reusable section
import ProductSection from "../components/productsection";

const Home = () => {
  return (
    <>
      <section className="bg-dark text-light text-center p-5">
        <h1 className="fw-bold">Fresh Products</h1>
        <p className="lead">100% Quality Products & Delivered To Your Doorstep</p>
        <Link to="/shop" className="btn btn-success btn-lg">
          Shop Now <i className="bi bi-arrow-right"></i>
        </Link>
      </section>

      {/* Fruits */}
      <ProductSection title="🍎 Fresh Fruits" products={fruits} />

      {/* Vegetables */}
      <ProductSection title="🥕 Fresh Vegetables" products={vegetables} />

      {/* Grocery */}
      <ProductSection title="🛒 Grocery Items" products={grocery} />

      {/* Mineral Water */}
      <ProductSection title="💧 Mineral Water" products={mineralWater} />

      {/* Soft Drinks */}
      <ProductSection title="🥤 Soft Drinks" products={softDrinks} />

      {/* Energy Drinks */}
      <ProductSection title="⚡ Energy Drinks" products={energyDrinks} />

      {/* Bakery*/}
  <ProductSection title ="Bakery Products"products={bakery}/>
    </>
  );
};

export default Home;
