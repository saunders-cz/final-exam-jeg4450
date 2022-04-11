import { useQuery } from "@apollo/client";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { GET_CATEGORIES } from "./queries";

export const SelectCategory = ({
  name,
  value,
  error,
  helperText,
  onChange,
  onBlur,
  style,
}) => {
  const { data, loading } = useQuery(GET_CATEGORIES);

  return (
    <FormControl style={style}>
      <InputLabel id="category-label">Category</InputLabel>
      {loading === true ? (
        <Typography>...</Typography>
      ) : (
        <Select
          name={name}
          labelId="category-label"
          label="Category"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
        >
          {data.categories.map((c, i) => (
            <MenuItem key={i} value={c.id}>
              {c.title}
            </MenuItem>
          ))}
        </Select>
      )}
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
