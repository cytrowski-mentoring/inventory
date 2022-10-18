import { InventoryItem } from "../utils";
import {
  makeAdd,
  makeGetAll,
  makeGetOne,
  makeRemove,
  makeUpdate,
} from "./common";

export const getInventory = makeGetAll<InventoryItem>(
  "http://localhost:9000/inventory"
);

export const getProduct = makeGetOne<InventoryItem>(
  "http://localhost:9000/inventory"
);

export const apiAddProductToInventory = makeAdd<Omit<InventoryItem, "id">>(
  "http://localhost:9000/inventory"
);

export const apiRemoveProduct = makeRemove<InventoryItem>(
  "http://localhost:9000/inventory"
);

export const apiEditProduct = makeUpdate<InventoryItem>(
  "http://localhost:9000/inventory"
);
