import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import useToken from "./useToken";
import LoginSignup from "./(auth)/(routes)/sign-in/page";
import DashboardLayout from "./(dashboard)/layout";
import Dashboard from "./(dashboard)/(routes)/walls/page";

const { setToken, token, removeToken, userId } = useToken();

function Router() {

    return (
        <BrowserRouter>
            <Route render={(props) =>(
                <DashboardLayout userId={userId} {...props}>
                    <Routes>
                        <Route path="/" exact component={Dashboard}/>
                        {!token && token !=="" && token !== undefined ?
                            <LoginSignup setToken={setToken}/>
                        :(
                            <Route/>
                        )}
                        {/* <Route path="/" exact component={Dashboard}/>
                        <Route/> */}
                    </Routes>
                </DashboardLayout>
            )}/>
        </BrowserRouter>
    )
}

export default Router;