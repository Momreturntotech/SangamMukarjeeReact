import { Component } from "react";

class ClassBasedComponent extends Component{
//1st method to create state in class based component
    state={
        showText:false,
        changeColor:false,
  };
//function to handle Click
  handleClick=()=>{
    console.log("button Clicked");
    //this is not recommended
    //this.state.showText=!this.state.showText}
    this.setState({
        showText:!this.state.showText,
        changeColor:!this.state.changeColor,
    })
}
/* 
//2nd method to create a state in class based component 
  constructor(props){
    super(props)
    this.state={
        showText:false,
    }
  }

*/

    render(){
        console.log(this.state);
        return (
            <>
            {this.state.showText?<h3 > This is Class Based Component</h3>:null}
            
            <button onClick={()=>this.handleClick()} style={{color:this.state.changeColor?'green':'red'}}>Toggle The Text</button>
            </>
        )
    }
}

export default ClassBasedComponent