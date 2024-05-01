import React, { useCallback, useState } from "react";
import styles from "./produto.module.css";
import ProdutoForm from "../ProdutosForms/ProdutoForm";
import ProdutoList from "../ProdutosList/ProdutoList";

function Produto() {
  const [productTitle, setProductTitle] = useState("");
  const [products, setProducts] = useState([]);
  const [productQnt, setProductQnt] = useState("");
  const [emptyMessage, setEmptyMessage] = useState(false);

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (productTitle !== "" && productQnt !== "") {
        setEmptyMessage(false);
        setProducts((old) => [...old, { title: productTitle, quantity: productQnt }]);
        setProductTitle("");
        setProductQnt("");
      } else {
        setEmptyMessage(true);
      }
    },
    [productTitle, productQnt]
  );

  const handleDeleteProduct = useCallback(
    (index) => {
      setProducts((old) => old.filter((_, i) => i !== index));
    },
    [setProducts]
  );

  return (
    <div className={styles.container}>
      <ProdutoForm
        productTitle={productTitle}
        setProductTitle={setProductTitle}
        productQnt={productQnt}
        setProductQnt={setProductQnt}
        handleFormSubmit={handleFormSubmit}
        emptyMessage={emptyMessage}
      />
      <ProdutoList products={products} handleDeleteProduct={handleDeleteProduct} />
    </div>
  );
}

export default Produto;
