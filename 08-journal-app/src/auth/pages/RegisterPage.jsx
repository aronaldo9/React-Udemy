import { Link as RouterLink } from "react-router-dom";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form>
        <Grid2 container>
          <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="nombre"
              label="Nombre"
              name="nombre"
              placeholder="Tu nombre"
              type="nombre"
              variant="outlined"
            />
          </Grid2>
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

          <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{ xs: 12 }}>
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
