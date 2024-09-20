import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ChangeEvent, useState } from 'react'
import Spacer from "../Core/Spacer";
import JuliusTitle from "../Core/Title";
import { Link } from "react-router-dom";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  }
  
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return(
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      { JuliusTitle('REGISTER') }
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <TextField
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          value={loginFormData.username}
          onChange={handleChange}
        />
      </FormControl>
      <Spacer height={3}/>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={loginFormData.password}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Spacer height={4} />
      <Button
        type="submit"
        variant="outlined"
        fullWidth
      >
        REGISTER
      </Button>
      <Spacer height={3} />
      <Typography component="span">
        Already have an account? Login <Link to="/">here</Link>.
      </Typography>
    </Box>
  )
}
