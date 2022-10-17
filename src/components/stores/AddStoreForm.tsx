import { apiAddStore } from "../../services/stores";
import { StoreForm } from "./StoresForm";

export const AddStoreForm = () => {
  return (
    <StoreForm onFormComplete={apiAddStore} submitButtonLabel="Add store" />
  );
};
