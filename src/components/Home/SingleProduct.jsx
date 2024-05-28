const SingleProduct = () => {
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img
            src="/src/assets/Picture/Ladies Collection/Pakistani-Malhar-lwmh-01r.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Pakistani Malhar</h2>
          <p>Cotton</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
