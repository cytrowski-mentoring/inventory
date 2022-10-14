import { Store } from "../utils";

export const getStores = (): Promise<Store[]> => {
  return fetch(`http://localhost:9000/stores`).then((response) =>
    response.json()
  );
};

export const getStore = (storeId: number): Promise<Store> => {
  return fetch(`http://localhost:9000/stores/${storeId}`).then((response) =>
    response.json()
  );
};

export const apiAddStore = (label: string) => {
  return fetch("http://localhost:9000/stores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      label: label,
    }),
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

export const apiEditStore = (storeId: number, label: string) => {
  return fetch(`http://localhost:9000/stores/${storeId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      label: label,
    }),
  });
};
