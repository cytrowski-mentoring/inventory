import { apiEditUnit } from "../../services/units";
import { UnitForm } from "./UnitForm";

export const EditUnitForm = () => {
  return (
    <UnitForm onFormComplete={apiEditUnit} submitButtonLabel="Update unit" />
  );
};
