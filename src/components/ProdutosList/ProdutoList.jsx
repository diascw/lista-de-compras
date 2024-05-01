import React from "react";
import styles from "./produtoList.module.css";

// eslint-disable-next-line react/prop-types
function ProdutoList({ products, handleDeleteProduct }) {
  return (
    <div className={styles.list}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? styles.even : styles.odd}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>
                <button className={`${styles.button} ${styles.buttonDelete}`} onClick={() => handleDeleteProduct(index)}>EXCLUIR</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProdutoList;
