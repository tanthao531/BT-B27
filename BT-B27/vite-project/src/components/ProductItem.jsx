const ProductItem = ({
  item,
  setProductDetail,
}) => {
  return (
    <div className="card p-3 h-100">

      <img
        src={item.image}
        alt={item.name}
        className="w-100"
      />

      <div className="mt-3">
        <h6>{item.name}</h6>

        <p>{item.price} $</p>

        <button
          className="btn btn-dark btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#shoeModal"
          onClick={() => setProductDetail(item)}
        >
          Xem chi tiết
        </button>
      </div>

    </div>
  );
};

export default ProductItem;