import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./apps/error_page"

const App = () => {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="*" element={<ErrorPage />} />
         </Routes> 
      </BrowserRouter>
  )
}

export default App;


