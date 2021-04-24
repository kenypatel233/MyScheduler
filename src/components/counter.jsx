
import React, { Component } from 'react';
import styles from './mystyles.module.css'; 



class Counter extends Component {
    state = {  
        
        tasks:["Task1...","Task2...","Task3...","Task4..."],
        completed:[],
        //currentTask: this.tasks.length,
              
        //completedTask : this.state.completed.length,
        value : 'Enter any task',
        
    }; /*Any data needed by the component is contained by state*/
    /*constructor()
    {
        super();
        
        this.handleChange.bind(this);
        this.addNewTask.bind(this);
    }Use arrow function instead*/
    renderDeletePending()
    {
        return <div className="col sm-4"> 
        <button className="btn btn-danger btn-sm m-2" onClick={this.deleteTask}> - </button> 
        <button className="btn btn-success btn-sm m-2" onClick={this.taskDone}> Completed</button>
        </div>
               

    }
    renderTasksList()
    {
        if(this.state.tasks.length === 0) return <p className={styles.taskalign}> No tasks Yet!</p>;
        
        return <ul className={styles.taskalign}> {this.state.tasks.map( tasks=> <li key={tasks} id={tasks.indexOf({tasks})}>{tasks} {this.renderDeletePending()}</li>)}</ul>;
         


    }
    renderCompleted()
    {
        if(this.state.completed.length === 0) return <p className={styles.taskalign}> No task completed Yet!</p>;
        
        return <ul className={styles.completedtaskalign}> {this.state.completed.map( completed=> <li key={completed}>{completed} </li>)}</ul>;
    }
    
    handleChange=(event)=> {

        this.setState({value: event.target.value});
        event.preventDefault()
    }
    addNewTask=(event)=>
    {
            
            this.state.tasks.push(this.state.value) ;  
            this.setState({value:''});
            event.preventDefault();
        
     }
     deleteTask=(index)=>
     {
         const list = this.state.tasks;     
         //let t= document.getElementById(index)
         
         list.splice(index,1);
         this.setState({list});
     }
    taskDone=(index)=>
    {
         const list = this.state.tasks;
         let c = list.splice(index,1);
         const done = this.state.completed;
         done.push(c);
         
         this.setState({done});
         this.setState({list});
         
         
    }
    
   
    render() {
        
        return <React.Fragment> {/*COmment <div>*/}
        
        
        <h1 className={styles.h1}> My-Scheduler </h1> 
        <div className="row text-center m-1 "> 
        <p className="col ">  Current Tasks:  <span className={this.currenttaskState()} >{this.formatCount()} </span> </p>
       
        <p className="col">  Completed Tasks:  <span className={this.completedtaskState()} > {this.state.completed.length} </span>  </p>    
        </div>


        <section className={styles.addTask}>
        <div className="row m-2">         
        <div id="addtask" className="col text-right">
        <span> 
            <input type="text" className="border border-dark"  value={this.state.value}
            onChange={this.handleChange} >
            </input>
        </span>        
        </div>
        <div className="col text-left" >
        <span>      
            <button className=" btn btn-secondary  " onClick={this.addNewTask} > + Add Task </button>
        </span>
        </div>
       
        </div>
        
        
        <div className={styles.list}>
        <div id="tasklist" className="row ">
        
        {this.renderTasksList()}
        
        
        </div>
        
        </div>
        </section>
        <section className="scrollbar scrollbar-primary">
        <h3> Completed Tasks</h3>
        {this.renderCompleted()}
        </section>
       
        

        </React.Fragment>;
    }
    
    currenttaskState() {
        let classes = "badge s-2 badge-";
        classes += this.state.tasks.length === 0 ? "warning" : "primary";
        
        return classes
    }
    
    completedtaskState() {
        let classes = "badge s-2 badge-";
        classes += this.state.completed.length === 0 ? "warning" : "primary";
        
        
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
        return this.state.tasks.length === 0 ? <strong> No current tasks</strong>:  this.state.tasks.length;
    }
}
 
export default Counter;
