import { Component } from "react";

class MagaJob extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: null,
            jobList: []
        }
    }

    increament = () =>{
        this.setState((prevState) =>{
            const newJob = {
                description: this.state.jobList.payload.description || `Job ${prevState.count + 1}`,
                createdAtDate: new Date().toLocaleDateString(),
                createdAtTime: new Date().toLocaleTimeString()
            }
            return {
                count: prevState.count + 1,
                // totalJob: [...prevState.jobList].length,
                jobList: [...prevState.jobList, newJob]
            }
        })
    }

    AddJobbyName = (e) =>{
        e.preventDefault();
        if(this.state.JobName.trim() == "")
            alert("Pls correct name")
            return        
    }
    delete = (index)=>{
        this.setState((prevState)=>({
                jobList: prevState.jobList.filter((_,i)=> i !== index),
        }));
    }
    render(){
        return(
            <div>
                <h1 style={{justifyItems:'center'}}>Manager job</h1>
                <form>
                    <input 
                        type="text" 
                        placeholder="Tên của Job" 
                        className="description"
                        onChange={this.AddJobbyName}
                        />
                    <button onClick={this.increament}>Add Job</button>
                </form>
                <ul>List Jobs - We have {this.state.jobList.length} job
                    {this.state.jobList.map((job, index) =>(
                        <li key={index}>
                            {job.createdAtDate} - {job.createdAtTime} - {job.description}

                            <button onClick={()=>this.delete(index)} style={{margin:'14px'}}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default MagaJob;