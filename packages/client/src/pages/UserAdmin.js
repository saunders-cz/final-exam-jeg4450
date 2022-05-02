import { useMutation } from "@apollo/client";
import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { SelectCategory } from "../modules/category/SelectCategory";
import { ADD_USER } from "../modules/meal/mutations";

const fieldStyle = { width: 500 };

const validationSchema = yup.object({
  firstName: yup.string().required().label("First Name"),
  lastName: yup.string().required().label("Last Name"),
  email: yup.string().required().label("Email"),
  address: yup.string().required().label("Address"),
});

export const UserAdmin = () => {
  const [saveUser, { loading, error }] = useMutation(ADD_USER);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    newsletter: false,
  };
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { firstName, lastName, email, address, newsletter } = values;
      const input = { firstName, lastName, email, address, newsletter };

      console.log(input);

      await saveUser({
        variables: {
          input,
        },
      });
    },
  });

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography variant="h3">Create New User</Typography>
        </Grid>
        <Grid item>
          <TextField
            id="firstName"
            label="First Name"
            style={fieldStyle}
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
        </Grid>
        <Grid item>
          <TextField
            id="lastName"
            label="Last Name"
            style={fieldStyle}
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Grid>
        <Grid item>
          <TextField
            id="email"
            label="Email"
            style={fieldStyle}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item>
          <TextField
            id="address"
            label="Address"
            style={fieldStyle}
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.adddress}
            helperText={errors.address}
          />
        </Grid>
        <Grid item>
          <Typography>
            Would you like to sign up for the exclusive Cool Whips newsletter?
          </Typography>
        </Grid>
        <Grid item>
          <Checkbox
            name="newsletter"
            value={values.newsletter}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.newsletter}
            helperText={errors.newsletter}
          />
        </Grid>
        {error && (
          <Grid item>
            <Typography>Error: {error.message}</Typography>
          </Grid>
        )}

        <Grid item container spacing={2}>
          <Grid item>
            <Button type="reset" disabled={loading}>
              Reset
            </Button>
          </Grid>
          <Grid item>
            <Button type="submit" disabled={loading}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
