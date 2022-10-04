export const units = [
  { id: "pack 1 kg", type: "mass", value: 1000 },
  { id: "jar 1 l", type: "volume", value: 1000 },
  { id: "bottle 0.5 l", type: "volume", value: 500 },
  { id: "pack 4 units", type: "quantity", value: 4 },
  { id: "unit", type: "quantity", value: 1 },
] as const;

export type ComplexUnit = typeof units[number];

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  unit?: ComplexUnit["id"];
}

export const currentInventory: InventoryItem[] = [
  { id: 1, name: "Chips", quantity: 2 },
  { id: 2, name: "Bananas", quantity: 1 },
  { id: 3, name: "Garlic", quantity: 1, unit: "unit" },
  { id: 4, name: "Jam", quantity: 1, unit: "jar 1 l" },
  { id: 5, name: "Olive oil", quantity: 1, unit: "bottle 0.5 l" },
  { id: 6, name: "Blackberries", quantity: 250 },
];
