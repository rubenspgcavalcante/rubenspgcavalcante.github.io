import {Home} from "home/index";
import {AboutMe} from "about-me/index";
import {Projects} from "projects/index";
import {Contact} from "contact/index";

export default [
    {component: Home, index: true},
    {path: '/home', component: Home},
    {path: '/about', component: AboutMe},
    {path: '/projects', component: Projects},
    {path: '/contact', component: Contact}
];