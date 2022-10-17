import { apiAddUnit } from "../../services/units";
import { UnitForm } from "./UnitForm";

export const AddUnitForm = () => {
  return <UnitForm onFormComplete={apiAddUnit} submitButtonLabel="Add unit" />;
};
