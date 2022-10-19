import { apiAddProductToInventory } from "../../services/inventory";
import { InventoryForm } from "./InventoryForm";

export const AddItemForm = () => {
  return (
    <InventoryForm
      onFormComplete={apiAddProductToInventory}
      submitButtonLabel="Add product"
    />
  );
};
