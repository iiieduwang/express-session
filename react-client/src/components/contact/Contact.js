import React, {Component} from 'react';


class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            login:""
        }
    }
    componentDidMount(){
        fetch('/users/check')  
        .then(res => res.text())
        .then(data => this.setState({
            login:data
        }))
    }
    render(){
        return(
            <div>
                <h1>Contact Page</h1> 
                <p>{this.state.login !== "" ? "已登入，登入帳號：" + this.state.login :"未登入"}</p> 
                
             </div> 
          
        )
    }
}
export default Contact;