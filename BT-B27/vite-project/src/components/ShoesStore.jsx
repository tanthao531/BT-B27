import { useState } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
import data from "../data/shoesData.json";

const ShoesStore = () => {
  const [productDetail, setProductDetail] = useState({});

  return (
    <div className="container">
      <h1 className="text-center my-4">
        Shoes shop
      </h1>

      <ProductList
        productsData={data}
        setProductDetail={setProductDetail}
      />

      <Modal productDetail={productDetail} />
    </div>
  );
};

export default ShoesStore;