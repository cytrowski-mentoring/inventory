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
import { apiRemoveUnit, getUnits } from "../../services/units";
import { useMutation, useQuery } from "@tanstack/react-query";

export const UnitsView = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: units,
    refetch,
  } = useQuery(["units"], getUnits, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const { mutate: remove } = useMutation(apiRemoveUnit, {
    onSuccess: () => refetch(),
  });

  return (
    <>
      <Button variant="contained" type="submit" component={Link} to="/add-unit">
        Add an unit
      </Button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error.</p>}
      <List>
        {units?.map((unit) => {
          return (
            <Fragment key={unit.id}>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary={unit.label} />
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    navigate(`/edit-unit/${unit.id}`);
                  }}
                >
                  Edit
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    remove(unit.id);
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
