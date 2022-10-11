import { Unit } from "../utils";

export const getUnits = (): Promise<Unit[]> => {
  return fetch("http://localhost:9000/units").then((response) =>
    response.json()
  );
};
