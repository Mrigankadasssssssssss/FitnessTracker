
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./utils/Themes"
import {BrowserRouter} from "react-router-dom"
import Authentication from "./pages/Authentication"
const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
      <div className={`w-[100%] h-[100vh] flex flex-col bg-[#FFFFFF] text-[#404040] overflow-x-hidden overflow-y-hidden transition-all duration-75 ease-in}`}>
        <Authentication/>
      </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
