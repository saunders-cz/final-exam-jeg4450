import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_MEALS } from "./queries";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Icon,
  Typography,
} from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { DELETE_MEAL } from "./mutations";

export const MealTable = () => {
  const { data, loading, error } = useQuery(GET_MEALS);
  const navigate = useNavigate();
  const [mealToDelete, setMealToDelete] = useState(undefined);
  const [deleteMeal, deleteResult] = useMutation(DELETE_MEAL, {
    refetchQueries: ["GET_MEAL", "GET_MEALS"],
    onCompleted: () => setMealToDelete(undefined),
  });

  if (error) return <Typography color="error">{error.message}</Typography>;
  if (loading) return <Typography>Loading</Typography>;

  const { meals } = data;

  const columns = [
    { field: "title", headerName: "Title", width: 350 },
    {
      field: "category",
      headerName: "Category",
      valueGetter: (input) => {
        return input.row.category.title;
      },
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      valueGetter: (input) => input.row.price.toFixed(2),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Icon>edit</Icon>}
          onClick={() => navigate(`/admin/food/${params.row.id}`)}
          label="Edit!"
        />,
        <GridActionsCellItem
          icon={<Icon>delete</Icon>}
          onClick={() => setMealToDelete(params.row)}
          label="Delete"
        />,
      ],
    },
  ];

  return (
    <>
      <div style={{ height: 800, width: 750 }}>
        <DataGrid rows={meals} columns={columns} />
      </div>
      {deleteResult.error && (
        <div>Error deleting meal: {deleteResult.error.message}</div>
      )}
      {mealToDelete !== undefined && (
        <Dialog
          open={mealToDelete !== undefined}
          onClose={() => setMealToDelete(undefined)}
        >
          <DialogTitle>Delete Meal</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to delete the {mealToDelete.title} meal?{" "}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setMealToDelete(undefined)}>Cancel</Button>
            <Button
              onClick={() => deleteMeal({ variables: { id: mealToDelete.id } })}
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};
