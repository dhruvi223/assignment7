import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useAuth } from '../AuthContext';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { emailMessages, passwordMessages } from "../constants/messages";
import { emailRegex, passwordRegex } from "../constants/validation";

export default function Signin() {
    const navigate = useNavigate();
    const auth = useAuth();
    const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = (data) => {
    auth.login(data.email, data.password, navigate);
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register("email", { required: true, pattern: emailRegex })}
                style={{ width: '350px', height: '40px' }} 
                />
                 {errors.email && <p>{emailMessages.invalid}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password", { required: true, maxLength: 32, minLength: 8, pattern: passwordRegex })}
                style={{ width: '350px', height: '40px' }} 
                />
                 {errors.password && <p>{passwordMessages.weak}</p>}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  
  );
}