import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Produto from "./Produto";

describe("Salvar produtos", () => {
  it("deve salvar um novo produto", async () => {
   
    render(<Produto />);

    fireEvent.change(screen.getByPlaceholderText("Produto"), { target: { value: "Produto 1" } });
    fireEvent.change(screen.getByPlaceholderText("Quantidade"), { target: { value: "10" } });

    fireEvent.click(screen.getByText("ADICIONAR"));

    expect(screen.getByText("Produto 1")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
