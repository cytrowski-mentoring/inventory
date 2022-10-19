import { Store } from "../utils";
import {
  makeAdd,
  makeGetAll,
  makeGetOne,
  makeRemove,
  makeUpdate,
} from "./common";

export const getStores = makeGetAll<Store>(`http://localhost:9000/stores`);

export const getStore = makeGetOne<Store>("http://localhost:9000/stores");

export const apiAddStore = makeAdd<Omit<Store, "id">>(
  "http://localhost:9000/stores"
);

export const apiRemoveStore = makeRemove<Store>("http://localhost:9000/stores");

export const apiEditStore = makeUpdate<Store>("http://localhost:9000/stores");
