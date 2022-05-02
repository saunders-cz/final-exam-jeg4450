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
import { useCart } from "../modules/cart/CartContext";

export const Menu = () => {
  const cart = useCart();
  const onAddItem = (id) => cart.addItem(id);

  const { data, loading, error } = useQuery(GET_MEALS);
  const navigate = useNavigate();

  if (error) return <Typography color="error">{error.message}</Typography>;
  if (loading) return <Typography>Loading</Typography>;

  const { meals } = data;

  return (
    <Grid container spacing={6}>
      <Grid item>
        <Typography variant="h5">
          <Link to="/cart">Cart</Link>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4">Drinks</Typography>
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
                  {item.title} (${item.price})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => onAddItem(item.id)} size="small">
                  Add To Cart
                </Button>{" "}
              </CardActions>
            </Card>
          ) : (
            ""
          )
        )}
      </Grid>
      <Grid item>
        <Typography variant="h4">Frozen Treats</Typography>
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
                  {item.title} (${item.price})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => onAddItem(item.id)} size="small">
                  Add To Cart
                </Button>{" "}
              </CardActions>
            </Card>
          ) : (
            ""
          )
        )}
      </Grid>
      <Grid item>
        <Typography variant="h4">Food</Typography>
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
                  {item.title} (${item.price})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => onAddItem(item.id)} size="small">
                  Add To Cart
                </Button>
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
