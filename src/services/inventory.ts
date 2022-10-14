import { InventoryItem } from "../utils";
import { makeGetAll } from "./common";

export const apiAddProductToInventory = (
  data: Omit<InventoryItem, 'id'>
) => {
  return fetch("http://localhost:9000/inventory", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
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
  { id, ...data }: InventoryItem
) => {
  return fetch(`http://localhost:9000/inventory/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const getInventory = makeGetAll<InventoryItem>("http://localhost:9000/inventory")

export const getProduct = (itemId: number): Promise<InventoryItem> => {
  return fetch(`http://localhost:9000/inventory/${itemId}`).then((response) =>
    response.json()
  );
};
