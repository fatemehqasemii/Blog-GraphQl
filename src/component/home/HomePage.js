import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Author from "../author/Author";
import Blogs from "../blog/Blogs";

function HomePage() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} mt={4} padding={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            نویسنده ها
          </Typography>
          <Author />
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
