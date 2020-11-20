import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Register from '../Pages/Register/index';
import Signin from '../Pages/Signin/index';
import NotFoundPage from '../Page404';

const Routes: React.FC = ()=>{
    return (
    <Switch>
        <Route path="/Register" exact component={Register} />
        <Route path="/" exact component={Signin}/>
        <Route path="*" exact component={NotFoundPage} />
    </Switch>
    )
}

export default Routes
