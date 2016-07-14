import React from "react";
   
    var CreateTaskList = React.createClass({
        render: function(){
            var createTask = function(td){
                // td = {id: '...', text: '...', interval: '...'}
                return <li key={td.id}>{td.text}</li>
            };
            return <ul>{this.props.td.map(createTask)}</ul>
        }
    }); 

var View = React.createClass({
      getInitialState(){
         var data = localStorage.getItem('nextItems');
         var items = [];
         var dailyList = [];
         var weeklyList = [];
         var monthyList = [];
         var yearlyList = [];

            items = JSON.parse(data);   

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
        return {
            dailyList: dailyList,
            weeklyList:weeklyList,
            monthyList: monthyList,
            yearlyList:yearlyList,
            selected: ''
        };
    },
    onClickView(selected){
        this.setState({selected: selected});
    },
      render(){
          var list = '';
          switch (this.state.selected) {
              case 'd':
                list = <CreateTaskList td={this.state.dailyList} />
              break;
              case 'w':
                list = <CreateTaskList td={this.state.weeklyList} />
              break;
              case 'm':
                list = <CreateTaskList td={this.state.monthyList} />
              break;
              case 'y':
                list = <CreateTaskList td={this.state.yearlyList} />
              break;
          }
        return(
            <div>
                <h1>View Tasks as per the Scheduler</h1>
                        <div class="btn-group btn-group-justified">
                            <div class="btn btn-default" onClick={() => this.onClickView('d')}>Daily Tasks</div>
                            <div class="btn btn-default" onClick={() => this.onClickView('w')}>Weekly Tasks</div>
                            <div class="btn btn-default" onClick={() => this.onClickView('m')}>Monthly Tasks</div>
                            <div class="btn btn-default" onClick={() => this.onClickView('y')}>Yearly Tasks</div>                   
                        </div>
                    <br />
                        <div class="jumbotron">
                                <h1>List of Tasks</h1>
                                {list}
                        </div>
            </div>
        );
    }
});
export default View;