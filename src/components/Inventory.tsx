import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { InventoryItem, Unit } from "../utils";
import { Link } from "react-router-dom";
import { getInventory } from "../services/inventory";
import { getUnits } from "../services/units";

export const Inventory = () => {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  useEffect(() => {
    getInventory().then(setInventoryItems);
    getUnits().then(setUnits);
  }, []);
  const items = inventoryItems.map((item) =>
    item.unitId === undefined
      ? item
      : { ...item, unit: units.find((unit) => unit.id === item.unitId)?.label }
  );
  return (
    <>
      <Button variant="contained" type="submit" component={Link} to="/add-item">
        Add a product
      </Button>
      <List>
        {items.map((item) => {
          return (
            <Fragment key={item.id}>
              <ListItem>
                <ListItemButton>
                  <ListItemText
                    primary={item.name}
                    secondary={`${item.quantity} ${item.unit ?? ""}`}
                  />
                </ListItemButton>
                <ListItemButton>Edit</ListItemButton>
                <ListItemButton>Delete</ListItemButton>
              </ListItem>
              <Divider />
            </Fragment>
          );
        })}
      </List>
    </>
  );
};
