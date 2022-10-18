import { Button, FormControl, TextField } from "@mui/material";
import { FormEventHandler, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Unit } from "../../utils";
import { getUnit } from "../../services/units";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  onFormComplete: (data: Unit) => Promise<Response>;
  submitButtonLabel: string;
}

export const UnitForm = ({ onFormComplete, submitButtonLabel }: Props) => {
  const { unitId } = useParams();
  const [unit, setUnit] = useState<Unit | null>(null);
  const queryClient = useQueryClient();

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
      queryClient.refetchQueries(["units"]);
      navigate("/units");
    });
  };

  if (unit === null && unitId !== undefined) {
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
