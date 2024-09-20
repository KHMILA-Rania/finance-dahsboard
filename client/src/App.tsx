
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { CssBaseline } from "@mui/material";
import {ThemeProvider, createTheme} from "@mui/material/styles"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import Navbar from "./scenes/navbar/navbar"
import Dashboard  from "./scenes/dashboard";

function App() {
    const theme = useMemo(()=>createTheme(themeSettings),[])

  return (
   <div className='app'>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
       <Box height="100%" width="100%" padding="1rem 2rem 4rem 2rem" >
          <Routes>
              <Route path='/' element={<Dashboard></Dashboard>}></Route>
              <Route path="/navbar" element={<Navbar></Navbar>}></Route>
          
          </Routes>
       </Box>
      </ThemeProvider>
      </BrowserRouter>
   </div>
  
  )
}

export default App
