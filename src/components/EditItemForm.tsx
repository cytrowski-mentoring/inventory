import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { FormEventHandler, useEffect, useState } from "react";
import { apiEditProduct, getProduct } from "../services/inventory";
import { getUnits } from "../services/units";
import { InventoryItem, Unit } from "../utils";
import { useNavigate, useParams } from "react-router-dom";

export const EditItemForm = () => {
  const { itemId } = useParams();
  const [units, setUnits] = useState<Unit[]>([]);
  const [product, setProduct] = useState<InventoryItem | null>(null);
  useEffect(() => {
    getUnits().then(setUnits);
  }, []);
  useEffect(() => {
    getProduct(Number(itemId)).then(setProduct);
  }, [itemId]);
  const navigate = useNavigate();
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const target = event.target as unknown as {
      name: HTMLInputElement;
      quantity: HTMLInputElement;
      unit: HTMLSelectElement;
      status: HTMLInputElement;
      essentiality: HTMLInputElement;
    };
    const name = target.name.value;
    const quantity = Number(target.quantity.value);
    const unit = Number(target.unit.value) as Unit["id"];
    const status = target.status.value === "disabled";
    const essentiality = target.essentiality.value === "essential";
    apiEditProduct(
      Number(itemId),
      quantity,
      name,
      unit,
      status,
      essentiality
    ).then(() => {
      navigate("/inventory");
    });
    target.name.value = "";
    target.quantity.value = "";
    target.unit.value = "";
    target.status.value = "disabled";
    target.essentiality.value = "non-essential";
    //console.log(event.target.unit.value);
  };
  if (product === null) {
    return <div>Loading product data</div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormControl margin="normal">
        <TextField
          id="1"
          label="Name of the product"
          variant="outlined"
          name="name"
          defaultValue={product.name}
        />
        <TextField
          id="2"
          label="Current stock"
          variant="outlined"
          name="quantity"
          defaultValue={product.quantity}
        />
        <FormControl>
          <InputLabel id="4">Unit of stock</InputLabel>
          <Select
            id="3"
            label="Unit of stock"
            variant="outlined"
            defaultValue={product.unitId}
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
        <FormControl>
          <FormLabel>Status</FormLabel>
          <RadioGroup
            name="status"
            defaultValue={product.isDisabled ? "disabled" : "active"}
          >
            <FormControlLabel
              value="active"
              control={<Radio />}
              label="Active"
            />
            <FormControlLabel
              value="disabled"
              control={<Radio />}
              label="Disabled"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Essentiality</FormLabel>
          <RadioGroup
            name="essentiality"
            defaultValue={product.isEssential ? "essential" : "non-essential"}
          >
            <FormControlLabel
              value="essential"
              control={<Radio />}
              label="Essential"
            />
            <FormControlLabel
              value="non-essential"
              control={<Radio />}
              label="Non-essential"
            />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" type="submit">
          Update product
        </Button>
      </FormControl>
    </form>
  );
};
