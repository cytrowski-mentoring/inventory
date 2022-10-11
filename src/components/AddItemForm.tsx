import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FormEventHandler, useEffect, useState } from "react";
import { apiAddProductToInventory } from "../services/inventory";
import { Unit } from "../utils";

export const AddItemForm = () => {
  const [units, setUnits] = useState<Unit[]>([]);
  useEffect(() => {
    fetch("http://localhost:9000/units")
      .then((response) => response.json())
      .then(setUnits);
  }, []);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const target = event.target as unknown as {
      name: HTMLInputElement;
      quantity: HTMLInputElement;
      unit: HTMLSelectElement;
    };
    const name = target.name.value;
    const quantity = Number(target.quantity.value);
    const unit = Number(target.unit.value) as Unit["id"];
    apiAddProductToInventory(quantity, name, unit);
    target.name.value = "";
    target.quantity.value = "";
    target.unit.value = "";
    //console.log(event.target.unit.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl margin="normal">
        <TextField
          id="1"
          label="Name of the product"
          variant="outlined"
          name="name"
        />
        <TextField
          id="2"
          label="Current stock"
          variant="outlined"
          name="quantity"
        />
        <FormControl>
          <InputLabel id="4">Unit of stock</InputLabel>
          <Select
            id="3"
            label="Unit of stock"
            variant="outlined"
            defaultValue=""
            name="unit"
          >
            <MenuItem value="" disabled>
              Pick unit
            </MenuItem>
            {units.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" type="submit">
          Add to inventory
        </Button>
      </FormControl>
    </form>
  );
};
