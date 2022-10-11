export interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  unitId: number;
  unit?: string;
}

export interface Unit {
  id: number;
  label: string;
}
