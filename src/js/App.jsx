import React from "react";

var TodoList = React.createClass({
    render: function(){
        var createItem = function(item){
            return <li key={item.id}>{item.text}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});
var TodoApp = React.createClass({
    getInitialState: function(){
        return {items: [], text: ''};
    },
    onChange: function(e){
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e){
        e.preventDefault();
        var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },
    onClickItems: function(e){
        this.state.items.pop();
        this.setState(this.state);
    },

    render: function(){
        return(
            <div>
                <h1>Welcome to To Do Web Application!</h1>
                <h3>Please add Tasks below</h3>
                    <TodoList items={this.state.items} />
                    <input class="form-control" id="inputDefault" type="text" onChange={this.onChange} value={this.state.text}/>
                            <div class="btn-group">
                                <a  class="btn btn-warning">Scheduler</a>
                                <a aria-expanded="true" class="btn btn-warning dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li>Daily</li>
                                    <li>Weekly</li>
                                    <li>Monthly</li>
                                    <li>Yearly</li>
                                </ul>
                            </div>
                            
                    <button class="btn btn-success" onClick={this.handleSubmit}>{'Add'}</button>
                    <button class="btn btn-danger" onClick={this.onClickItems}>{'Remove'}</button>
            </div>
        )
    }
});

export default TodoApp;