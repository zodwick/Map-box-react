import React from "react";
import Startfirebase from "../firebase";
import { ref, set, get,update,remove,child } from "firebase/database";


export class Crud extends React.Component{
    constructor(props){
        super(props);
        this.state={
            db:"",
            username:"",
            
        }

        this.interface = this.interface.bind(this);
    }

    componentDidMount(){    
        this.setState({db:Startfirebase()});
    }

    render()
    {
        return(
            <>
            <label>Crud</label>
            <input type="text" placeholder="Username" value={this.state.username} onChange={(e)=>{this.setState({username:e.target.value})}}/>
            <button  id ="add" onClick={(this.interface)}>Click</button>
            </>
        )
        }

        interface(event){
            const db = this.state.db;
            const username = this.state.username;
            set(ref(db, 'users/' + username), {

                username: username,
            });
        }


}