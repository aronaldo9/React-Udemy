import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import Google from "@mui/icons-material/Google";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import { useMemo } from "react";

const formData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    // console.log({ email, password });
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form
        aria-label="submit-form"
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid2 container>
          <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid2>

          <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              inputProps={{
                "data-testid": "password",
              }}
              value={password}
              onChange={onInputChange}
            />
          </Grid2>

          <Grid2
            container
            // eslint-disable-next-line no-extra-boolean-cast
            display={!!errorMessage ? "" : "none"}
            sx={{ mt: 1 }}
          >
            <Grid2 size={{ xs: 12 }}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid2>
          </Grid2>

          <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                aria-label="google-btn"
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
