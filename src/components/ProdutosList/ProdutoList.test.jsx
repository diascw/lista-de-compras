import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProdutoList from "./ProdutoList";

describe("<ProdutoList />", () => {
  it("excluir produto da lista", () => {
    const products = [
      { title: "Produto 1", quantity: 10 },
    ];

    const handleDeleteProduct = jest.fn();

    render(<ProdutoList products={products} handleDeleteProduct={handleDeleteProduct} />);

    const buttonDelete = screen.getByRole("button", { name: "EXCLUIR" });

    fireEvent.click(buttonDelete);

    expect(handleDeleteProduct).toHaveBeenCalledWith(0); 
  });
});
