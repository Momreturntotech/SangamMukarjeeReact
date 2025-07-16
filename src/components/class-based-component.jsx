import { Component } from "react";

class ClassBasedComponent extends Component{
//1st method to create state in class based component
    state={
        showText:false,
        changeColor:false,
        count:0,
        countColor:"green"
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

componentDidMount(){// when ever you want to something on page load you are going to do under it 
    console.log("This is Component Did mount");
   this.setState({
        showText:!this.state.showText,
        changeColor:!this.state.changeColor,
    })
    
}

componentDidUpdate(prevProps,prevState){//when ever the state value is updated 
    console.log("This is Component Did Update the State value is Updated ");
    console.log(prevProps,prevState)
     console.log(prevProps,this.state)
      if (prevState.count !== this.state.count && this.state.count === 10) {// review this code
      this.setState({ countColor: "purple" });
    }

}

componentWillUnmount(){
    console.log("Component is getting unmounted ")
}

    render(){
        //console.log(this.state);
        return (
            <>
            {this.state.showText?<h3 > This is Class Based Component</h3>:null}
            <h4 style={{color:this.state.countColor}}> This is count varibale {this.state.count}</h4>
            
            <button onClick={()=>this.handleClick()} style={{color:this.state.changeColor?'green':'red'}}>Toggle The Text</button>
            <button onClick={()=> this.setState({count:this.state.count+1})}>Increase Count</button>
            </>
        )
    }
}

export default ClassBasedComponent