import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BOOKS } from "../modules/book/queries";
import {
  Icon,
  Typography,
  Grid,
  ListItem,
  ListItemText,
  CardActions,
  Button,
  CardContent,
  CardMedia,
  Card,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Home = () => {
  const { data, loading, error } = useQuery(GET_BOOKS);
  const navigate = useNavigate();

  if (error) return <Typography color="error">{error.message}</Typography>;
  if (loading) return <Typography>Loading</Typography>;

  const { books } = data;

  return (
    <Grid container spacing={6}>
      <Link to={`/admin/`}>Admin</Link>
      <Grid item spacing={5}>
        <Typography variant="h4">Classics</Typography>
        {books.map((item, i) =>
          item.categoryId === "1" ? (
            <Card spacing={4} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={"../img/book-" + item.categoryId + ".png"}
                alt="Category 1 img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.author}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/books/${item.id}`}>View Details</Link>
              </CardActions>
            </Card>
          ) : (
            ""
          )
        )}
      </Grid>
      <Grid item>
        <Typography variant="h4">Fiction</Typography>
        {books.map((item, i) =>
          item.categoryId === "2" ? (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={"../img/book-" + item.categoryId + ".png"}
                alt="Category 2 img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.author}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/books/${item.id}`}>View Details</Link>
              </CardActions>
            </Card>
          ) : (
            ""
          )
        )}
      </Grid>
      <Grid item>
        <Typography variant="h4">Non Fiction</Typography>
        {books.map((item, i) =>
          item.categoryId === "3" ? (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={"../img/book-" + item.categoryId + ".png"}
                alt="Category 2 img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.author}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/books/${item.id}`}>View Details</Link>
              </CardActions>
            </Card>
          ) : (
            ""
          )
        )}
      </Grid>
    </Grid>
  );
};
