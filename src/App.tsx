import { BrowserRouter, Route, Routes } from "react-router-dom"

import ErrorPage from "./apps/error_page"
import ExportNav from "./components/ui/nav/export_nav"
import HomePage from "./apps/home_page"
import Footer from "./components/ui/nav/footer"

const App = () => {
  return (
      <BrowserRouter>
      <ExportNav />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
         </Routes> 
         <Footer />
      </BrowserRouter>
  )
}

export default App;


