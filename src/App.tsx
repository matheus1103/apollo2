import { AppRoutes } from "./Routes"
import theme from './global/styles/theme';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  return(
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
