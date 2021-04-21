import React, { Component } from 'react';
import styles from './mystyles.module.css'; 
//src\components\mystyles.module.css
//src\components\counter.jsx

class Counter extends Component {
    state = {  
        currentTask:0,
        pendingTask:30,        
        completedTask : 90,
        tasks:["Task1...","Task2...","Task3..."],
        
    }; /*Any data needed by the component is contained by state*/
    
   
    render() {
        
        return <React.Fragment> {/*COmment <div>*/}
        <h1 className={styles.h1}> My-Scheduler </h1> 
        <div className="row text-center "> 
        <p className="col ">  Current Tasks:  <span className={this.currenttaskState()} >{this.formatCount()} </span> </p>
        <p className="col"> Pending Tasks:  <span className={this.pendingtaskState()}>  {this.state.pendingTask}</span></p>
        <p className="col">  Completed Tasks:  <span className={this.completedtaskState()} > {this.state.completedTask} </span>  </p>    
        </div>


        <section className={styles.addTask}>
        <div className="row">         
        <div id="addtask" className="col text-right">
        <span> 
            <input type="text" className="border border-dark">
            </input>
        </span>        
        </div>
        <div className="col text-left" >
        <span>      
            <button className=" btn btn-secondary  " > Add Task </button>
        </span>
        </div>
       
        </div>
        
        
        <div className={styles.list}>
        <div id="tasklist" className="row">
        <ul className={styles.taskalign}>
        {this.state.tasks.map(tasks=><li> {tasks} </li>)}
        </ul>
        </div>
        
        </div>
        </section>
        

        </React.Fragment>;
    }
    
    currenttaskState() {
        let classes = "badge s-2 badge-";
        classes += this.state.currentTask === 0 ? "warning" : "primary";
        
        return classes
    }
    pendingtaskState() {
        let classes = "badge s-2 badge-";
        classes += this.state.pendingTask === 0 ? "warning" : "primary";
        
        return classes
    }
    completedtaskState() {
        let classes = "badge s-2 badge-";
        classes += this.state.completedTask === 0 ? "warning" : "primary";
        
        
        return classes
    }
    addtaskState() {
        let classes = "row";
        classes += styles.addTask;
        
        
        return classes
    }
    
    
     
   

    formatCount()
    {
        //his.setState.pendingTask = this.state.currentTask + this.state.completedTask;
        return this.state.currentTask === 0 ? <b> No current tasks</b>:  this.state.currentTask;
    }
}
 
export default Counter;
