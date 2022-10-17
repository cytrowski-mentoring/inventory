import { Button, FormControl, TextField } from "@mui/material";
import { FormEventHandler, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Store } from "../../utils";
import { apiEditStore, getStore } from "../../services/stores";
import { StoreForm } from "./StoresForm";

export const EditStoreForm = () => {
  return (
    <StoreForm onFormComplete={apiEditStore} submitButtonLabel="Update store" />
  );
};
