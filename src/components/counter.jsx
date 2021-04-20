import React, { Component } from 'react';
class Counter extends Component {
    state = {  
        currentTask:0,
        pendingTask:0,        
        completedTask : 0
    }; /*Any data needed by the component is contained by state*/
    render() { 
        return <React.Fragment> {/*COmment <div>*/}
        <h1> My-Scheduler </h1> 
        <pre> 
        <span> | Current Tasks:  {this.formatCount()} | </span>
        <span> | Pending Tasks: {this.state.pendingTask} | </span>
        <span> | Completed Tasks: {this.state.completedTask} | </span>
        
        <button> Add </button>
        </pre>
        </React.Fragment>;
    }
    formatCount()
    {
        //his.setState.pendingTask = this.state.currentTask + this.state.completedTask;
        return this.state.currentTask === 0 ? <b> No current tasks</b>:  this.state.currentTask;
    }
}
 
export default Counter;