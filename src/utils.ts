export interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  unitId: number;
  unit?: string;
  isDisabled?: boolean;
  isEssential?: boolean;
}

export interface Unit {
  id: number;
  label: string;
}
