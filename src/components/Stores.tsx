import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Store } from "../utils";
import { useNavigate, Link } from "react-router-dom";
import { apiRemoveStore, getStores } from "../services/stores";

export const Stores = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState<Store[]>([]);
  useEffect(() => {
    getStores().then(setStores);
  }, []);

  return (
    <>
      <Button
        variant="contained"
        type="submit"
        component={Link}
        to="/add-store"
      >
        Add a store
      </Button>
      <List>
        {stores.map((store) => {
          return (
            <Fragment key={store.id}>
              <ListItem>
                <ListItemButton>
                  <ListItemText
                    primary={store.label}
                  />
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    navigate(`/edit-store/${store.id}`);
                  }}
                >
                  Edit
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    apiRemoveStore(store.id).then(() => {
                      getStores().then(setStores);
                    });
                  }}
                >
                  Delete
                </ListItemButton>
              </ListItem>
              <Divider />
            </Fragment>
          );
        })}
      </List>
    </>
  );
};
