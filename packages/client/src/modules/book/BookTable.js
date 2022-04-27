import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BOOKS } from "./queries";
import { Icon, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

export const BookTable = () => {
  const { data, loading, error } = useQuery(GET_BOOKS);
  const navigate = useNavigate();

  if (error) return <Typography color="error">{error.message}</Typography>;
  if (loading) return <Typography>Loading</Typography>;

  const { books } = data;

  const columns = [
    { field: "title", headerName: "Title", width: 200 },
    { field: "publisher", headerName: "Publisher", width: 120 },
    { field: "author", headerName: "Author", width: 120 },
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
          onClick={() => navigate(`/admin/${params.row.id}`)}
          label="Edit"
        />,
      ],
    },
  ];

  return (
    <div style={{ height: 800, width: 750 }}>
      <DataGrid rows={books} columns={columns} />
    </div>
  );
};
