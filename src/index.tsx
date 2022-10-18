import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InventoryView } from "./components/inventory/InventoryView";
import { AddItemForm } from "./components/inventory/AddItemForm";
import { ShoppingList } from "./components/ShoppingList";
import { Categories } from "./components/Categories";
import { StatisticsView } from "./components/StatisticsView";
import { StoresView } from "./components/stores/StoresView";
import { MyAccount } from "./components/MyAccount";
import { UnitsView } from "./components/units/UnitsView";
import { EditItemForm } from "./components/inventory/EditItemForm";
import { AddUnitForm } from "./components/units/AddUnitForm";
import { EditUnitForm } from "./components/units/EditUnitForm";
import { AddStoreForm } from "./components/stores/AddStoreForm";
import { EditStoreForm } from "./components/stores/EditStoreForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "inventory",
        element: <InventoryView />,
      },
      {
        path: "add-item",
        element: <AddItemForm />,
      },
      {
        path: "edit-item/:itemId",
        element: <EditItemForm />,
      },
      {
        path: "add-unit",
        element: <AddUnitForm />,
      },
      {
        path: "edit-unit/:unitId",
        element: <EditUnitForm />,
      },
      {
        path: "shopping-list",
        element: <ShoppingList />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "statistics",
        element: <StatisticsView />,
      },
      {
        path: "stores",
        element: <StoresView />,
      },
      {
        path: "add-store",
        element: <AddStoreForm />,
      },
      {
        path: "edit-store/:storeId",
        element: <EditStoreForm />,
      },
      {
        path: "my-account",
        element: <MyAccount />,
      },
      {
        path: "units",
        element: <UnitsView />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
