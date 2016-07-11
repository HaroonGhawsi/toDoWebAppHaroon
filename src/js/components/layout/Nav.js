import React from "react";
import {IndexLink, Link} from "react-router";

export default class Nav extends React.Component{
    constructor(){
        super()
        this.state = {
            collapsed: true,
        };
    }
    toggleCollapse(){
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render(){
        const { location } = this.props;
        const { collapsed } = this.state;

         //const homeClass = location.pathname === "/" ? "active" : "";
         //const aboutClass = location.pathname.match(/^\/about/) ? "active" : "";
         //const viewClass = location.pathname.match(/^\/view) ? "active" : "";
         //const helpClass = location.pathname.match(/^\/help) ? "active" : "";

        const navClass = collapsed ? "collapse" : "";

        return(
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
                            <span class="sr-only">Toggle navigations</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
            <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li activeClassName ="active">
                        <Link to="home" onClick={this.toggleCollapse.bind(this)}><strong>Home</strong></Link>
                    </li>
                    <li activeClassName ="active">
                        <Link to="about" onClick={this.toggleCollapse.bind(this)}><strong>About</strong></Link>
                    </li>
                    <li activeClassName ="active">
                        <Link to="view" onClick={this.toggleCollapse.bind(this)}><strong>View</strong></Link>
                    </li>
                    <li activeClassName ="active">
                        <Link to="help" onClick={this.toggleCollapse.bind(this)}><strong>Help</strong></Link>
                    </li>
                </ul>
                </div>
            </div>
         </nav>
        );
    }
}