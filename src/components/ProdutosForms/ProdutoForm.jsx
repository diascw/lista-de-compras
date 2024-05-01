import React from "react";
import styles from "./produtoForms.module.css";

// eslint-disable-next-line react/prop-types
function ProdutoForm({ productTitle, setProductTitle, productQnt, setProductQnt, handleFormSubmit, emptyMessage }) {
  const handleQuantityChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {

      setProductQnt(parseInt(value));
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.formContent}>
        <input
          className={styles.campos}
          type="text"
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
          placeholder="Produto"
        />
        <br />
        <input
          className={styles.campos}
          type="text"
          value={productQnt}
          onChange={handleQuantityChange}
          placeholder="Quantidade"
        />
        <br />
        <button onClick={handleFormSubmit} className={`${styles.campos} ${styles.buttonAdd}`} type="submit">
          ADICIONAR
        </button>
      </div>
      {emptyMessage && <p>Os campos não podem estar vazios.</p>}
    </div>
  );
}

export default ProdutoForm;
