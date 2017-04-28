import React, {Component} from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";

export default class MainTemplate extends Component {
    constructor(props) {
        super(props);
        const menus = [
            {action: "/", label: "Home"},
            {action: "/about", label: "About Me"},
            {action: "/projects", label: "Projects"},
            {action: "/contact", label: "Contact"}
        ];
        this.state = {menus};
    }

    render() {
        const {menus} = this.state;
        const {pathname} = this.props.location;
        let children;

        if (this.props.children) {
            children = React.cloneElement(this.props.children, this.props);
        }
        else {
            console.warn("<MainTemplate>: No children detected");
        }

        return (
            <div>
                <Navbar fixedTop={true}>
                    <Navbar.Header>
                        <Navbar.Brand>Rubens Pinheiro</Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav bsStyle="pills" activeKey={pathname} href="#">
                            {menus.map((item, i) =>
                                <NavItem eventKey={item.action} key={i} href={`#${item.action}`}>{item.label}</NavItem>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {children}
                <div className="footer">
                    <div className="pull-right">
                        <span className="text-muted hidden-xs">See me in </span>
                        <a className="horizontal-spacer-xs" href="https://github.com/rubenspgcavalcante"> GitHub <i
                            className="fa fa-github"></i></a>

                        <span className="hidden-xs"> or </span>
                        <a className="horizontal-spacer-xs"
                           href="http://stackoverflow.com/users/2346915/rubens-pinheiro">Stack Overflow <i
                            className="fa fa-stack-overflow"></i></a>

                        <span className="hidden-xs"> and in </span>
                        <a className="horizontal-spacer-xs "
                           href="https://www.linkedin.com/in/rubens-pinheiro-a34a4823">LinkedIn <i
                            className="fa fa-linkedin-square"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}