import React from "react";
import { Link } from "react-router";

import Nav from "../components/layout/Nav";

export default class Home extends React.Component{

    render(){

        const { locations } = this.props;
        const containerStyle = {
            marginTop: "60px"
        };
        console.log("Home");
        return(
        <div>
            <Nav location={locations} />
            <div class="container" style={containerStyle}>
                    <div class="row">
                        <div class="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
            </div>
        </div>
        );
    }
}
