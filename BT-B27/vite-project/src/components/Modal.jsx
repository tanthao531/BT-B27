const Modal = ({ productDetail }) => {
  return (
    <div
      className="modal fade"
      id="shoeModal"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">
              {productDetail.name}
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">

            <div className="row">

              <div className="col-5">
                <img
                  src={productDetail.image}
                  alt={productDetail.name}
                  className="w-100"
                />
              </div>

              <div className="col-7">

                <h3>{productDetail.name}</h3>

                <p>
                  <b>Price:</b>
                  {" "}
                  {productDetail.price} $
                </p>

                <p>
                  <b>Description:</b>
                  {" "}
                  {productDetail.description}
                </p>

                <p>
                  <b>Quantity:</b>
                  {" "}
                  {productDetail.quantity}
                </p>

                <p>
                  <b>Alias:</b>
                  {" "}
                  {productDetail.alias}
                </p>

                <p>
                  <b>Short Description:</b>
                  {" "}
                  {productDetail.shortDescription}
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;