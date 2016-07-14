import React from "react";
import localStorage from "localStorage";

var TodoList = React.createClass({
    render: function(){
        var createItem = function(item){
            return <li key={item.id}> {item.text}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});

var TodoApp = React.createClass({
    getInitialState: function(){
         var data = localStorage.getItem('nextItems');
         var items = [];
        
        items = JSON.parse(data);
        
         var dailyList = [];
         var weeklyList = [];
         var monthyList = [];
         var yearlyList = [];

         for (var i=0; i<items.length;i++) {
             if (items[i].interval === 'd') {
                 dailyList.push(items[i]);
             }else if(items[i].interval === 'w'){
                 weeklyList.push(items[i]);
             }else if(items[i].interval === 'm'){
                 monthyList.push(items[i]);
             }else if(items[i].interval === 'y')
                 yearlyList.push(items[i]);
         }

        return {items: items, text: '', interval: ''};
    },
    onChange: function(e){
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e){
        e.preventDefault();
        var newItem = {text: this.state.text, id: Date.now(), interval: this.state.interval};
        var nextItems = this.state.items.concat([newItem]);
        var nextText = '';

        localStorage.setItem('nextItems' , JSON.stringify(nextItems));
        this.setState({items: nextItems, text: nextText});
    },
    onClickItems: function(){
        this.state.items.pop();
        localStorage.setItem('nextItems' , JSON.stringify(this.state.items));
        this.setState(this.state);
    },
    onChangeSelection: function(e){
        var value = e.target.value;
        this.setState({interval: value});
    },

   render: function(){
        return(
            <div>
                <h1>Welcome to To Do Web Application!</h1>
                <h3>Please add Tasks below</h3>

                 <select onChange={this.onChangeSelection} value={this.value}>
                    <option value="T">Aufgabenplaner</option>
                    <option value="d">pro Tag</option>
                    <option value="w">pro Woche</option>
                    <option value="m">pro monat</option>
                    <option value="y">pro Jahr</option>
                </select>
                    <TodoList items={this.state.items} />
                    <input class="form-control" id="inputDefault" type="text" onChange={this.onChange} value={this.state.text}/>      
                    <button class="btn btn-success" onClick={this.handleSubmit}>{'Add'}</button>
                    <button class="btn btn-danger" onClick={this.onClickItems}>{'Remove'}</button>
            </div>
            
        )
    }
});

export default TodoApp;