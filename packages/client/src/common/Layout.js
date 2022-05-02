import React from "react";
import { Grid, Container } from "@mui/material";
import { Navigation } from "./Navigation";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navigation />
        </Grid>
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};
