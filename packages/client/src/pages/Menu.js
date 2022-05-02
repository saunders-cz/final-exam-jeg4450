import { useQuery } from "@apollo/client";
import React from "react";
import { GET_MEALS } from "../modules/meal/queries";
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

export const Menu = () => {
  const { data, loading, error } = useQuery(GET_MEALS);
  const navigate = useNavigate();

  if (error) return <Typography color="error">{error.message}</Typography>;
  if (loading) return <Typography>Loading</Typography>;

  const { meals } = data;

  return (
    <Grid container spacing={6}>
      <Grid item>
        <Typography variant="h4">Classics</Typography>
        {meals.map((item, i) =>
          item.categoryId === "1" ? (
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                height="140"
                image={"../img/meal-" + item.categoryId + ".png"}
                alt="Category 1 img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/`}>Add to Order</Link>
              </CardActions>
            </Card>
          ) : (
            ""
          )
        )}
      </Grid>
      <Grid item>
        <Typography variant="h4">Fiction</Typography>
        {meals.map((item, i) =>
          item.categoryId === "2" ? (
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                height="140"
                image={"../img/meal-" + item.categoryId + ".png"}
                alt="Category 2 img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/`}>Add to Order</Link>{" "}
              </CardActions>
            </Card>
          ) : (
            ""
          )
        )}
      </Grid>
      <Grid item>
        <Typography variant="h4">Non Fiction</Typography>
        {meals.map((item, i) =>
          item.categoryId === "3" ? (
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                height="140"
                image={"../img/meal-" + item.categoryId + ".png"}
                alt="Category 2 img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/`}>Add to Order</Link>{" "}
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
