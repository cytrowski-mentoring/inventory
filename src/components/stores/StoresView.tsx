import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiRemoveStore, getStores } from "../../services/stores";
import { useMutation, useQuery } from "@tanstack/react-query";

export const StoresView = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    data: stores,
    refetch,
  } = useQuery(["stores"], getStores, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const { mutate: remove } = useMutation(apiRemoveStore, {
    onSuccess: () => refetch(),
  });

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
      {isLoading && <p>Loading...</p>}
      {error && <p>Error.</p>}
      <List>
        {stores?.map((store) => {
          return (
            <Fragment key={store.id}>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary={store.label} />
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
                    remove(store.id);
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
