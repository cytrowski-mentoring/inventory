import { Button, FormControl, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Unit } from "../../utils";
import { getUnit } from "../../services/units";
import { useQueryClient } from "@tanstack/react-query";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface Props {
  onFormComplete: (data: Unit) => Promise<Response>;
  submitButtonLabel: string;
}

type Inputs = {
  label: string;
};

export const UnitForm = ({ onFormComplete, submitButtonLabel }: Props) => {
  const { unitId } = useParams();
  const [unit, setUnit] = useState<Unit | null>(null);
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      label: "",
    },
  });

  useEffect(() => {
    if (unitId === undefined) {
      return;
    }
    getUnit(Number(unitId)).then(setUnit);
  }, [unitId]);

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    const payload = {
      id: Number(unitId),
      label: data.label,
    };

    onFormComplete(payload).then(() => {
      queryClient.refetchQueries(["units"]);
      navigate("/units");
    });
  };

  if (unit === null && unitId !== undefined) {
    return <div>Loading unit data</div>;
  }
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl margin="normal">
        <Controller
          control={control}
          rules={{ required: "This is required." }}
          name="label"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              id="1"
              label="Label"
              variant="outlined"
              name="label"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={!!errors.label}
            />
          )}
        />

        <Button variant="contained" type="submit">
          {submitButtonLabel}
        </Button>
      </FormControl>
    </form>
  );
};
