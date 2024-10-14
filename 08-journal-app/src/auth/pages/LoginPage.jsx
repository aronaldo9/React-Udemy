import { Grid2, TextField, Typography } from "@mui/material";

export const LoginPage = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid2
        className="box-shadow"
        size={{ xs: 4, sm: 4, md: 6 }}
        sx={{ backgroundColor: "white", padding: 2, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>

        <form>
          <Grid2 container>
            <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                id="email"
                label="Email"
                name="email"
                placeholder="correo@google.com"
                type="email"
                variant="outlined"
              />
            </Grid2>
            <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                id="password"
                label="Password"
                name="password"
                placeholder="password"
                type="password"
                variant="outlined"
              />
            </Grid2>
          </Grid2>
        </form>
      </Grid2>
    </Grid2>
  );
};
