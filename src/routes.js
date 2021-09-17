import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Sales from "./Pages/Sales/Sales";
import Layout from "./Components/Layout";

function Routes() {

    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <Layout {...props}>
                    <Switch>
                        <Route path="/" exact component={Sales}/>
                        <Route component={Sales}/>
                    </Switch>
                </Layout>
            )}/>
        </BrowserRouter>
    )
}

export default Routes;