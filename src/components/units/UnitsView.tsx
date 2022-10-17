import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Unit } from "../../utils";
import { useNavigate, Link } from "react-router-dom";
import { apiRemoveUnit, getUnits } from "../../services/units";

export const UnitsView = () => {
  const navigate = useNavigate();
  const [units, setUnits] = useState<Unit[]>([]);
  useEffect(() => {
    getUnits().then(setUnits);
  }, []);

  return (
    <>
      <Button variant="contained" type="submit" component={Link} to="/add-unit">
        Add an unit
      </Button>
      <List>
        {units.map((unit) => {
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
                    apiRemoveUnit(unit.id).then(() => {
                      getUnits().then(setUnits);
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
