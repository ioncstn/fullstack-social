import { createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import Login from './Register/Login'
import { Route, Routes } from 'react-router-dom';
import Register from './Register/Register';

function App() {
  // const fetchFruits = async () => {
  //   const response = await axios.get("http://localhost:9876/hello");
  //   setFruitsArray(response.data.fruits)
  //   console.log(response.data)
  // };
  const theme = createTheme({
    palette: {
      mode: 'dark',
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
      </Routes>
    </ThemeProvider>
  )
}

export default App
