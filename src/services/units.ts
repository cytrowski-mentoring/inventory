import { Unit } from "../utils";

export const getUnits = (): Promise<Unit[]> => {
  return fetch(`http://localhost:9000/units`).then((response) =>
    response.json()
  );
};

export const getUnit = (unitId: number): Promise<Unit> => {
  return fetch(`http://localhost:9000/units/${unitId}`).then((response) =>
    response.json()
  );
};

export const apiAddUnit = (label: string) => {
  return fetch("http://localhost:9000/units", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      label: label,
    }),
  });
};

export const apiRemoveUnit = (unitId: number) => {
  return fetch(`http://localhost:9000/units/${unitId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const apiEditUnit = (unitId: number, label: string) => {
  return fetch(`http://localhost:9000/units/${unitId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      label: label,
    }),
  });
};
