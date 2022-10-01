import "./App.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

type Unit = "pack" | "kg";

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  unit: Unit;
}

const currentInventory: InventoryItem[] = [
  { id: 1, name: "Proszek", quantity: 2, unit: "pack" },
  { id: 2, name: "Banany", quantity: 1, unit: "kg" },
];

function App() {
  return (
    <>
      <List>
        {currentInventory.map((item) => {
          return (
            <ListItem>
              <ListItemButton>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default App;
