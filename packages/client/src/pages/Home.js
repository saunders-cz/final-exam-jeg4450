import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { MealTable } from "../modules/meal/MealTable";
import { useNavigate, useParams } from "react-router-dom";
import { EditMeal } from "../modules/meal/EditMeal";
import { AddMeal } from "../modules/meal/AddMeal";

export const Home = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [showAddMeal, setShowAddMeal] = useState(false);

  const showEditMeal = params.id !== undefined;

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h2">Meals</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAddMeal(true)}>Add Meal</Button>
        </Grid>
        <Grid item>
          <MealTable />
        </Grid>
      </Grid>
      {showEditMeal && (
        <Dialog open={true} onClose={() => navigate("/")}>
          <DialogTitle />
          <DialogContent>
            <EditMeal onClose={() => navigate("/")} />
          </DialogContent>
        </Dialog>
      )}
      {showAddMeal && (
        <Dialog open={true} onClose={() => setShowAddMeal(false)}>
          <DialogTitle />
          <DialogContent>
            <AddMeal onClose={() => setShowAddMeal(false)} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
