import { Button, FormControl, TextField } from "@mui/material";
import { FormEventHandler, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Unit } from "../../utils";
import { apiEditUnit, getUnit } from "../../services/units";

interface Props {
  onFormComplete: (data: Unit) => Promise<Response>;
  submitButtonLabel: string;
}

export const UnitForm = ({ onFormComplete, submitButtonLabel }: Props) => {
  const { unitId } = useParams();
  const [unit, setUnit] = useState<Unit | null>(null);

  useEffect(() => {
    getUnit(Number(unitId)).then(setUnit);
  }, [unitId]);
  useEffect(() => {
    if (unitId === undefined) {
      return;
    }
    getUnit(Number(unitId)).then(setUnit);
  }, [unitId]);

  const navigate = useNavigate();
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const target = event.target as unknown as {
      label: HTMLInputElement;
    };
    const label = target.label.value;

    target.label.value = "";

    const data = {
      id: Number(unitId),
      label,
    };

    onFormComplete(data).then(() => {
      navigate("/units");
    });
  };

  if (unit === null) {
    return <div>Loading unit data</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl margin="normal">
        <TextField
          id="1"
          label="Label"
          variant="outlined"
          name="label"
          defaultValue={unit?.label}
        />
        <Button variant="contained" type="submit">
          {submitButtonLabel}
        </Button>
      </FormControl>
    </form>
  );
};
