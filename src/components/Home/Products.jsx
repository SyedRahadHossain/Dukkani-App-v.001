import SingleProduct from "./SingleProduct";

const Products = () => {
  return (
    <div className="mx-10">
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>
      <div className="flex flex-wrap gap-8 mb-8 justify-center">
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
      </div>
    </div>
  );
};

export default Products;
