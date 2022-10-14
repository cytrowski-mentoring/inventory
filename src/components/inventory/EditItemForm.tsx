import { apiEditProduct } from "../../services/inventory";
import { InventoryForm } from "./InventoryForm";

export const EditItemForm = () => {
  return (
    <InventoryForm
      onFormComplete={apiEditProduct}
      submitButtonLabel="Update product"
    />
  );
};
