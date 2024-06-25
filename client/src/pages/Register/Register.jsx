import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext/AuthContext";
import { useContext } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    apartment_letter: "",
    floor: "",
    phone_number: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirmation = () =>
    setShowPasswordConfirmation((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value, maxLength } = e.target;

    if (name === "floor") {
      if (/^\d*$/.test(value) && value.length <= maxLength) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else if (name === "apartment_letter") {
      if (/^[A-Za-z]*$/.test(value) && value.length <= maxLength) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else if (value.length <= maxLength || !maxLength) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const result = await createUser(formData);
    if (result.success) {
      navigate("/user");
    } else {
      setErrors(result.errors || { general: result.message });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Crear cuenta
        </Typography>
        {errors.general && (
          <Typography color="error" className="flex items-center justify-center gap-2">
            <FaExclamationCircle />
            {errors.general}
          </Typography>
        )}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Nombre"
                name="name"
                autoComplete="name"
                onChange={handleChange}
                value={formData.name}
                error={!!errors.name}
                helperText={errors.name ? errors.name[0] : ""}
                inputProps={{ maxLength: 35 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="last_name"
                label="Apellido"
                name="last_name"
                autoComplete="last_name"
                onChange={handleChange}
                value={formData.last_name}
                error={!!errors.last_name}
                helperText={errors.last_name ? errors.last_name[0] : ""}
                inputProps={{ maxLength: 35 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="apartment_letter"
                label="Letra del Apartamento"
                name="apartment_letter"
                autoComplete="apartment_letter"
                onChange={handleChange}
                value={formData.apartment_letter}
                error={!!errors.apartment_letter}
                helperText={errors.apartment_letter ? errors.apartment_letter[0] : ""}
                inputProps={{ maxLength: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="floor"
                label="Piso"
                name="floor"
                autoComplete="floor"
                onChange={handleChange}
                value={formData.floor}
                error={!!errors.floor}
                helperText={errors.floor ? errors.floor[0] : ""}
                inputProps={{ maxLength: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phone_number"
                label="Número de Teléfono"
                name="phone_number"
                autoComplete="phone_number"
                onChange={handleChange}
                value={formData.phone_number}
                error={!!errors.phone_number}
                helperText={errors.phone_number ? errors.phone_number[0] : ""}
                inputProps={{ maxLength: 15 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                value={formData.email}
                error={!!errors.email}
                helperText={errors.email ? errors.email[0] : ""}
                inputProps={{ maxLength: 255 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Contraseña"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
                value={formData.password}
                error={!!errors.password}
                helperText={errors.password ? errors.password[0] : ""}
                inputProps={{ maxLength: 255 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password_confirmation"
                label="Confirmar Contraseña"
                type={showPasswordConfirmation ? "text" : "password"}
                id="password_confirmation"
                autoComplete="new-password"
                onChange={handleChange}
                value={formData.password_confirmation}
                error={!!errors.password_confirmation}
                helperText={
                  errors.password_confirmation ? errors.password_confirmation[0] : ""
                }
                inputProps={{ maxLength: 255 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPasswordConfirmation}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Crear cuenta
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                ¿Ya tienes una cuenta? Inicia sesión
              </Link>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" align="right" sx={{ my: 2 }}>
            * Campos obligatorios
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center" className="py-2">
        {"Copyright © "}
        <button>Gym Booker</button> {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}
