import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Inventory } from "./components/Inventory";
import { AddItemForm } from "./components/AddItemForm";
import { ShoppingList } from "./components/ShoppingList";
import { Categories } from "./components/Categories";
import { Statistics } from "./components/Statistics";
import { Stores } from "./components/Stores";
import { MyAccount } from "./components/MyAccount";
import { Settings } from "./components/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "add-item",
        element: <AddItemForm />,
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
        element: <Statistics />,
      },
      {
        path: "stores",
        element: <Stores />,
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
