import { Component } from "react";

//Tạo một class Component
class ClsComponent extends Component{
    constructor(props){
        super(props);
        this.state = {count: 0}
    }

    componentDidMount(){
        console.log("Component Didmount");
        
    }
    componentDidUpdate(){
        console.log("Component Updated");
    }

    componentWillUnmount(){
        console.log("Component Will unmount");
        
    }
    increment = () =>{
        //thay đổi giá trị của count trong state thêm 1 đơn vị giá trị
        this.setState(prevState => ({count: prevState.count + 1}));
    }

    desmment = () =>{
        this.setState(prevState => ({count: prevState.count - 1}));
    }

    //Hàm render
    render(){
        return(
            <div>
                <h3>Job: {this.state.count}</h3>
                <button onClick={this.increment}>Increment Count</button>
                <button onClick={this.desmment}>Decreasing Count</button>
            </div>
        )
    }   
}

export default ClsComponent;