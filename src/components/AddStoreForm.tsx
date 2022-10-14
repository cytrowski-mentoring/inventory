import { Button, FormControl, TextField } from "@mui/material";
import { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { apiAddStore } from "../services/stores";

export const AddStoreForm = () => {
  const navigate = useNavigate();
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const target = event.target as unknown as {
      label: HTMLInputElement;
    };
    const label = target.label.value;

    apiAddStore(label).then(() => {
      navigate("/stores");
    });
    target.label.value = "";
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <FormControl margin="normal">
        <TextField id="1" label="Label" variant="outlined" name="label" />
        <Button variant="contained" type="submit">
          Add store
        </Button>
      </FormControl>
    </form>
  );
};
