import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InventoryView } from "./components/views/InventoryView";
import { AddItemForm } from "./components/inventory/AddItemForm";
import { ShoppingList } from "./components/ShoppingList";
import { Categories } from "./components/Categories";
import { StatisticsView } from "./components/views/StatisticsView";
import { StoresView } from "./components/views/StoresView";
import { MyAccount } from "./components/MyAccount";
import { Settings } from "./components/Settings";
import { EditItemForm } from "./components/inventory/EditItemForm";
import { AddUnitForm } from "./components/AddUnitForm";
import { EditUnitForm } from "./components/EditUnitForm";
import { AddStoreForm } from "./components/AddStoreForm";
import { EditStoreForm } from "./components/EditStoreForm";

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
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
