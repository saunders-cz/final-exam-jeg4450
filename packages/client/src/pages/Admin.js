import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { BookTable } from "../modules/book/BookTable";
import { useNavigate, useParams } from "react-router-dom";
import { EditBook } from "../modules/book/EditBook";
import { AddBook } from "../modules/book/AddBook";

export const Admin = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [showAddbook, setShowAddbook] = useState(false);

  const showEditbook = params.id !== undefined;

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h2">Books</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAddbook(true)}>Add Book</Button>
        </Grid>
        <Grid item>
          <BookTable />
        </Grid>
      </Grid>
      {showEditbook && (
        <Dialog open={true} onClose={() => navigate("/admin")}>
          <DialogTitle />
          <DialogContent>
            <EditBook onClose={() => navigate("/admin")} />
          </DialogContent>
        </Dialog>
      )}
      {showAddbook && (
        <Dialog open={true} onClose={() => setShowAddbook(false)}>
          <DialogTitle />
          <DialogContent>
            <AddBook onClose={() => setShowAddbook(false)} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
