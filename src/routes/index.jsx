import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { Login } from "../pages/Login";
import { PageNotFound } from "../pages/PageNotFound";
import { SobreNos } from "../pages/SobreNos";
import { Faqs } from "../pages/FAQs";
import { UserPage } from '../pages/UserPage/index';
import { UserProfile } from '../pages/ProfileUser/index';
import { ConnectionsPage } from "../pages/ConnectioPage";
import { NotificationsPage } from "../pages/NotificationPage";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }> </Route>
                <Route path="/sobrenos" element={ <SobreNos/> }> </Route>
                <Route path="/faqs" element={ <Faqs/> }> </Route>
                <Route path="/register" element={ <Register /> }> </Route>
                <Route path="/login" element={ < Login /> }> </Route>
                <Route path="/userpage" element={ < UserPage /> }> </Route>
                <Route path="/profile" element={ < UserProfile /> }> </Route>
                <Route path="/connections" element={ < ConnectionsPage /> }> </Route>
                <Route path="/notification" element={ < NotificationsPage /> }> </Route>
                <Route path="*" element={ < PageNotFound /> }> </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;