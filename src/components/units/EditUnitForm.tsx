import { Button, FormControl, TextField } from "@mui/material";
import { FormEventHandler, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Unit } from "../../utils";
import { apiEditUnit, getUnit } from "../../services/units";
import { UnitForm } from "./UnitForm";

export const EditUnitForm = () => {
  return (
    <UnitForm onFormComplete={apiEditUnit} submitButtonLabel="Update unit" />
  );
};
