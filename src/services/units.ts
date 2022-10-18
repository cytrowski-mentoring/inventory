import { Unit } from "../utils";
import { makeAdd, makeGetAll, makeGetOne, makeRemove } from "./common";

export const getUnits = makeGetAll<Unit>("http://localhost:9000/units");

export const getUnit = makeGetOne<Unit>("http://localhost:9000/units");

export const apiAddUnit = makeAdd<Omit<Unit, "id">>(
  "http://localhost:9000/units"
);

export const apiRemoveUnit = makeRemove<Unit>("http://localhost:9000/units");

export const apiEditUnit = ({ id, ...data }: Unit) => {
  return fetch(`http://localhost:9000/units/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
