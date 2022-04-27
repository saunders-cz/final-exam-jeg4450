import { useQuery } from "@apollo/client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_BOOK } from "../modules/book/queries";

export const BookDetailPage = () => {
  const { id } = useParams();

  const { data, error, loading } = useQuery(GET_BOOK, {
    variables: { id: id },
  });

  if (error) return <Typography color="error">{error.message}</Typography>;
  if (loading) return <Typography>Loading</Typography>;
  console.log(data);
  const book = data.book;
  return (
    <Grid container>
      <Grid item xs={12}>
        <img
          src={`../img/book-${book.categoryId}.png`}
          width="350px"
          alt="Book Cover"
          loading="lazy"
        />
        <Typography variant="h4">{book.title}</Typography>
        <Typography variant="body">{book.author}</Typography>
        <br />
        <Typography variant="body">{book.description}</Typography>
        <br />
        <Typography variant="body">{book.publisher}</Typography>
        <br />
        <Typography variant="body">${book.price}</Typography>
        <br />
        <Typography variant="body">Category: {book.categoryId}</Typography>
      </Grid>
    </Grid>
  );
};
