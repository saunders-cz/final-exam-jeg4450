import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Link to="/">Home</Link>
      </Grid>
      <Grid item>
        <Link to="/menu">Menu</Link>
      </Grid>
      <Grid item>
        <Link to="/admin/food">Food Admin</Link>
      </Grid>
    </Grid>
  );
};
