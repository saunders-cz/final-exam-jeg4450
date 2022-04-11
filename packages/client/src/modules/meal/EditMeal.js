import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { MealForm } from "./MealForm";
import { GET_MEAL } from "./queries";

export const EditMeal = ({ onClose }) => {
  const params = useParams();

  const { data, loading, error } = useQuery(GET_MEAL, {
    variables: {
      id: params.id,
    },
  });

  if (error) return <Typography>{error.message}</Typography>;
  if (loading) return <Typography>Loading...</Typography>;

  return (
    <MealForm id={params.id} initialValues={data.meal} onClose={onClose} />
  );
};
