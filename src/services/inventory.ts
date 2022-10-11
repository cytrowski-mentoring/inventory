import { InventoryItem } from "../utils";

export const apiAddProductToInventory = (
  quantity: number,
  name: string,
  unitId: number
) => {
  return fetch("http://localhost:9000/inventory", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      unitId: unitId,
      quantity: quantity,
    }),
  });
};

export const apiRemoveProduct = (productId: number) => {
  return fetch(`http://localhost:9000/inventory/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const apiEditProduct = (
  productId: number,
  quantity: number,
  name: string,
  unitId: number
) => {
  return fetch(`http://localhost:9000/inventory/${productId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      unitId: unitId,
      quantity: quantity,
    }),
  });
};

export const getInventory = (): Promise<InventoryItem[]> => {
  return fetch("http://localhost:9000/inventory").then((response) =>
    response.json()
  );
};

export const getProduct = (itemId: number): Promise<InventoryItem> => {
  return fetch(`http://localhost:9000/inventory/${itemId}`).then((response) =>
    response.json()
  );
};
