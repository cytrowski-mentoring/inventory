import { Unit } from "../utils";
import { makeAdd, makeGetAll, makeGetOne, makeRemove } from "./common";

export const getUnits = makeGetAll<Unit>("http://localhost:9000/units");
export const getUnit = makeGetOne<Unit>("http://localhost:9000/units");

export const apiAddUnit = makeAdd<Omit<Unit, "id">>(
  "http://localhost:9000/units"
);

export const apiRemoveUnit = makeRemove<Unit>("http://localhost:9000/units")

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
