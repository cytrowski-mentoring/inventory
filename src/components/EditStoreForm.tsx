import { Button, FormControl, TextField } from "@mui/material";
import { FormEventHandler, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Store } from "../utils";
import { apiEditStore, getStore } from "../services/stores";

export const EditStoreForm = () => {
  const { storeId } = useParams();
  const [store, setStore] = useState<Store | null>(null);

  useEffect(() => {
    getStore(Number(storeId)).then(setStore);
  }, [storeId]);

  const navigate = useNavigate();
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const target = event.target as unknown as {
      label: HTMLInputElement;
    };
    const label = target.label.value;
    apiEditStore(Number(storeId), label).then(() => {
      navigate("/stores");
    });
    target.label.value = "";
  };

  if (store === null) {
    return <div>Loading store data</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl margin="normal">
        <TextField
          id="1"
          label="Label"
          variant="outlined"
          name="label"
          defaultValue={store.label}
        />
        <Button variant="contained" type="submit">
          Update store
        </Button>
      </FormControl>
    </form>
  );
};
