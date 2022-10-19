export const makeGetAll =
  <T>(url: string) =>
  (): Promise<T[]> => {
    return fetch(url).then((response) => response.json());
  };

export const makeGetOne =
  <T extends { id: number }>(url: string) =>
  (id: T["id"]): Promise<T> => {
    return fetch(`${url}/${id}`).then((response) => response.json());
  };

export const makeAdd =
  <T>(url: string) =>
  (data: T) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

export const makeRemove =
  <T extends { id: number }>(url: string) =>
  (id: T["id"]) => {
    return fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

export const makeUpdate =
  <T extends { id: number }>(url: string) =>
  (data: T) => {
    return fetch(`${url}/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
