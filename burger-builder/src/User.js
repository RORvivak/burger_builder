import React, {Component, Fragment} from 'react';


class User extends Component {

    render(){
        
        return(
            <form onSubmit = {(event)=>this.props.submit(event)}>
                <input type = "text"  name = "name" onChange= {(e)=> this.props.change(e)}></input>
                <input type = "text"  name = "job" onChange= {(e) => this.props.change(e)}></input>
                <button>Submit</button>
            </form>
        )
    }
}



export default User

