const About = () => {
  return (
    <div className="bg-light">

      <section className="bg-dark text-light text-center py-5">
        <div className="container">
          <h1 className="fw-bold">About Us</h1>
          <p className="text-light">Learn more about our journey, mission, and vision.</p>
        </div>
      </section>

      <section className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <img src="https://via.placeholder.com/600x400" className="img-fluid rounded shadow" alt=""/>
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p className="text-muted">
              We are a dedicated e-commerce company offering the best quality products at the best prices.
            </p>
          </div>
        </div>
      </section>

      {/* Aap baki sections bhi isi tarah wrap kar sakte ho */}
      
    </div>
  );
};

export default About;
