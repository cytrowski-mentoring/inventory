import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import { apiRemoveProduct, getInventory } from "../../services/inventory";
import { getUnits } from "../../services/units";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

export const InventoryView = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: inventoryItems,
    refetch,
  } = useQuery(["inventoryItems"], getInventory, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const { mutate: remove } = useMutation(apiRemoveProduct, {
    onSuccess: () => refetch(),
  });

  const { data: units } = useQuery(["units"], getUnits, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const items = inventoryItems?.map((item) =>
    item.unitId === undefined
      ? item
      : { ...item, unit: units?.find((unit) => unit.id === item.unitId)?.label }
  );

  return (
    <>
      <Button variant="contained" type="submit" component={Link} to="/add-item">
        Add a product
      </Button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error.</p>}
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name of the product</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell>Unit</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Shop</TableCell>
              <TableCell>Options</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Essentiality</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        navigate(`/edit-item/${item.id}`);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        remove(item.id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell>
                    {item.isDisabled ? "Disabled" : "Active"}
                  </TableCell>
                  <TableCell>
                    {item.isEssential ? "Essential" : "Non-essential"}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
