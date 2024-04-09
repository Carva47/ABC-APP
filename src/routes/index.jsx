import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { Login } from "../pages/Login";
import { PageNotFound } from "../pages/PageNotFound";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }> </Route>
                <Route path="/register" element={ <Register /> }> </Route>
                <Route path="/login" element={ <Login /> }> </Route>
                <Route path="*" element={ <PageNotFound /> }> </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;