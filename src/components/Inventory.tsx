import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Fragment, useState } from "react";
import { currentInventory } from "../utils";
import { Link } from "react-router-dom";

export const Inventory = () => {
  const [inventoryItems, setInventoryItems] = useState(currentInventory);
  return (
    <>
      <Button variant="contained" type="submit" component={Link} to="/add-item">
        Add a product
      </Button>
      <List>
        {inventoryItems.map((item) => {
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
              </ListItem>
              <Divider />
            </Fragment>
          );
        })}
      </List>
    </>
  );
};
