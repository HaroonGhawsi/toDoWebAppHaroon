import React from "react";

export default class View extends React.Component{
    render(){
        return(
            <div>
                <h1>View Tasks as per the Scheduler</h1>
                    <div class="btn-groud btn-group-justified">
                        <div class="btn btn-default">Daily Tasks</div>
                        <div class="btn btn-default">Weekly Tasks</div>
                        <div class="btn btn-default">Monthly Tasks</div>
                        <div class="btn btn-default">Yearly Tasks</div>                   
                    </div>
            </div>
        );
    }
}