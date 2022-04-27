import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { BookForm } from "./BookForm";
import { GET_BOOK } from "./queries";

export const EditBook = ({ onClose }) => {
  const params = useParams();

  const { data, loading, error } = useQuery(GET_BOOK, {
    variables: {
      id: params.id,
    },
  });

  if (error) return <Typography>{error.message}</Typography>;
  if (loading) return <Typography>Loading...</Typography>;

  return (
    <BookForm id={params.id} initialValues={data.book} onClose={onClose} />
  );
};
