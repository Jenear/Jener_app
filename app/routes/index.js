import React,{Component} from 'react';
//    路由的两种类型 HashRouter(开发常用） BrowserRouter,
import  {
    HashRouter as Router,
    Route
} from 'react-router-dom';
import Home from '../containers/home';
export default class RouterMap extends Component{
    render(){
        return(
            <div>
                <Router>
                    <div>
                        <Route path ='/' component={Home} />
                    </div>
                </Router>
            </div>
        )
    }
}