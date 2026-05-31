import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

//La funcion fue creada con chatGPT, que me explico como utilizar el AppRouter
function App() { 
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App