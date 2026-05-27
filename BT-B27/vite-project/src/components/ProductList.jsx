import ProductItem from "./ProductItem";

const ProductList = ({
  productsData,
  setProductDetail,
}) => {
  return (
    <div className="row">
      {productsData.map((product) => {
        return (
          <div
            className="col-4 mb-4"
            key={product.id}
          >
            <ProductItem
              item={product}
              setProductDetail={setProductDetail}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;