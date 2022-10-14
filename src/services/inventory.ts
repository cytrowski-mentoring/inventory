import { InventoryItem } from "../utils";
import { makeGetAll } from "./common";

export const apiAddProductToInventory = (
  quantity: number,
  name: string,
  unitId: number,
  isDisabled: boolean,
  isEssential: boolean
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
      isDisabled: isDisabled,
      isEssential: isEssential,
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
  unitId: number,
  isDisabled: boolean,
  isEssential: boolean
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
      isDisabled: isDisabled,
      isEssential: isEssential,
    }),
  });
};

export const getInventory = makeGetAll<InventoryItem>("http://localhost:9000/inventory")

export const getProduct = (itemId: number): Promise<InventoryItem> => {
  return fetch(`http://localhost:9000/inventory/${itemId}`).then((response) =>
    response.json()
  );
};
