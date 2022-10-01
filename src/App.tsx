import "./App.css";

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
      {currentInventory.map((item) => {
        return <div>{item.name}</div>;
      })}
    </>
  );
}

export default App;
