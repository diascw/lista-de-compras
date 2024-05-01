import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProdutoForm from "./ProdutoForm";

describe("<ProdutoForm />", () => {
  it("adicionar produto ao preencher os campos corretamente", async () => {
    const setProductTitle = jest.fn();
    const setProductQnt = jest.fn();
    const handleFormSubmit = jest.fn();

    render(
      <ProdutoForm
        productTitle=""
        setProductTitle={setProductTitle}
        productQnt=""
        setProductQnt={setProductQnt}
        handleFormSubmit={handleFormSubmit}
        emptyMessage={false}
      />
    );

    const inputTitle = screen.getByPlaceholderText("Produto");
    const inputQuantity = screen.getByPlaceholderText("Quantidade");

    fireEvent.change(inputTitle, { target: { value: "Produto 1" } });
    fireEvent.change(inputQuantity, { target: { value: "10" } });

    const buttonAdd = screen.getByText("ADICIONAR");
    fireEvent.click(buttonAdd);

    expect(setProductTitle).toHaveBeenCalledWith("Produto 1");
    expect(setProductQnt).toHaveBeenCalledWith(10);
    expect(handleFormSubmit).toHaveBeenCalled();

    const emptyMessage = screen.queryByText("Os campos não podem estar vazios!");
    expect(emptyMessage).toBeNull();
  });
});
