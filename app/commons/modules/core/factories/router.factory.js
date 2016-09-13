import {Route, IndexRoute} from "react-router";
import routes from "../routes/routes";

export default class RouterFactory {
    static buildRoutes() {
        return routes.map(route => {
            if(route.index) {
                return <IndexRoute key="index-route" {...route}/>
            }
            else {
                return <Route key={route.path} {...route} ></Route>
            }
        })

    }
}