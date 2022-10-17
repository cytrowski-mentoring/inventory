import { Store } from "../utils";
import { makeGetAll } from "./common";

export const getStores = makeGetAll<Store>(`http://localhost:9000/stores`);

export const getStore = (storeId: number): Promise<Store> => {
  return fetch(`http://localhost:9000/stores/${storeId}`).then((response) =>
    response.json()
  );
};

export const apiAddStore = (data: Omit<Store, "id">) => {
  return fetch("http://localhost:9000/stores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const apiRemoveStore = (storeId: number) => {
  return fetch(`http://localhost:9000/stores/${storeId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const apiEditStore = ({ id, ...data }: Store) => {
  return fetch(`http://localhost:9000/stores/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
