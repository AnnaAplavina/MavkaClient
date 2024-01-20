import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import useToken from "./useToken";

function Router() {

    const { token, removeToken, setToken, userId } = useToken();

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
                    </Routes>
                </DashboardLayout>
            )}/>
        </BrowserRouter>
    )
}

export default Router;