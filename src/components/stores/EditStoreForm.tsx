import { apiEditStore } from "../../services/stores";
import { StoreForm } from "./StoresForm";

export const EditStoreForm = () => {
  return (
    <StoreForm onFormComplete={apiEditStore} submitButtonLabel="Update store" />
  );
};
