import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { AuthNav } from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";
import { NavLink as RouterLink } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  AppBar as Header,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (false)
    return (
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    );

  return (
    <Header
      position="static"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={toolbarStyles}>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <MenuItem sx={{ py: "6px", px: "12px" }}>
              <Typography variant="body2" color="text.primary">
                Pricing
              </Typography>
            </MenuItem>
            <MenuItem sx={{ py: "6px", px: "12px" }}>
              <Typography variant="body2" color="text.primary">
                FAQ
              </Typography>
            </MenuItem>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Button
              color="primary"
              variant="text"
              size="small"
              component={RouterLink}
              to="/login"
            >
              Sign in
            </Button>
            <Button
              color="primary"
              variant="contained"
              size="small"
              component={RouterLink}
              to="/register"
            >
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </Header>
  );
};

const toolbarStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: "999px",
  bgcolor: "rgba(255, 255, 255, 0.4)",
  backdropFilter: "blur(24px)",
  maxHeight: 40,
  border: "1px solid",
  borderColor: "divider",
  boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
};
export default AppBar;
