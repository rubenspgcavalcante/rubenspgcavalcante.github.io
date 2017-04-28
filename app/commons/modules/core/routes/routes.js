import {Home} from "home";
import {AboutMe} from "about-me";
import {Projects} from "projects";
import {Contact} from "contact";

export default [
    {component: Home, index: true},
    {path: '/home', component: Home},
    {path: '/about', component: AboutMe},
    {path: '/projects', component: Projects},
    {path: '/contact', component: Contact}
];