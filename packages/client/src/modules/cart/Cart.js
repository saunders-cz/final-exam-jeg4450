import { useQuery } from "@apollo/client";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Link,
} from "@mui/material";
import React from "react";
import { GET_MEALS } from "../meal/queries";
import { useCart } from "./CartContext";

function findMatchingMeal(id, mealList) {
  let retMeal = undefined;
  mealList.forEach((meal) => {
    if (meal.id === id) {
      retMeal = meal;
    }
  });
  return retMeal;
}

export const Cart = () => {
  const cart = useCart();
  const { data, loading, error } = useQuery(GET_MEALS);

  if (error) return <Typography color="error">{error.message}</Typography>;
  if (loading) return <Typography>Loading</Typography>;
  const { meals } = data;

  const { items, updateItemQuantity, hasItems, getTotalPrice } = cart;
  return (
    <Container>
      <Typography variant="h2">Shopping Cart</Typography>
      {hasItems === false && (
        <Typography variant="h6">
          You currently have no items in your cart.
        </Typography>
      )}
      {items.map((item, i) => {
        console.log(item);
        const foodItem = findMatchingMeal(item.id, meals);
        return (
          <Box m={2}>
            <Card>
              <CardMedia
                component="img"
                height="150px"
                image={foodItem.imgsrc}
                alt={foodItem.title}
              />
              <CardContent>
                <Typography variant="h6">
                  You currently have {item.qty} unit(s) of {foodItem.title} in
                  your cart
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => updateItemQuantity(item.id, item.qty + 1)}
                >
                  +1
                </Button>
                <Button
                  size="small"
                  onClick={() => updateItemQuantity(item.id, item.qty - 1)}
                >
                  -1
                </Button>
                <Button
                  size="small"
                  onClick={() => updateItemQuantity(item.id, 0)}
                >
                  Remove All
                </Button>
              </CardActions>
            </Card>
          </Box>
        );
      })}
    </Container>
  );
};
