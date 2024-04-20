import { Box, Container, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Home page
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
