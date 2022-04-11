import { useQuery } from "@apollo/client";
import React from "react";
import { GET_MEALS } from "./queries";
import { Icon, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

export const MealTable = () => {
  const { data, loading, error } = useQuery(GET_MEALS);
  const navigate = useNavigate();

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
          onClick={() => navigate(`/meals/${params.row.id}`)}
          label="Edit"
        />,
      ],
    },
  ];

  return (
    <div style={{ height: 800, width: 750 }}>
      <DataGrid rows={meals} columns={columns} />
    </div>
  );
};
