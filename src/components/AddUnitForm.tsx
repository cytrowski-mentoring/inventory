import { Button, FormControl, TextField } from "@mui/material";
import { FormEventHandler } from "react";
import { apiAddUnit } from "../services/units";
import { useNavigate } from "react-router-dom";

export const AddUnitForm = () => {
  const navigate = useNavigate();
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const target = event.target as unknown as {
      label: HTMLInputElement;
    };
    const label = target.label.value;

    apiAddUnit({ label }).then(() => {
      navigate("/settings");
    });
    target.label.value = "";
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <FormControl margin="normal">
        <TextField id="1" label="Label" variant="outlined" name="label" />
        <Button variant="contained" type="submit">
          Add unit
        </Button>
      </FormControl>
    </form>
  );
};
