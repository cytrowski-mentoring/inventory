import { Unit } from "../utils";
import {
  makeAdd,
  makeGetAll,
  makeGetOne,
  makeRemove,
  makeUpdate,
} from "./common";

export const getUnits = makeGetAll<Unit>("http://localhost:9000/units");

export const getUnit = makeGetOne<Unit>("http://localhost:9000/units");

export const apiAddUnit = makeAdd<Omit<Unit, "id">>(
  "http://localhost:9000/units"
);

export const apiRemoveUnit = makeRemove<Unit>("http://localhost:9000/units");

export const apiEditUnit = makeUpdate<Unit>("http://localhost:9000/units");
