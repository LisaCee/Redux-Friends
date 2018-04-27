import React from 'react';
import {connect} from 'react-redux';
import { getFriends, addFriend, editFriend, deleteFriend } from '../actions/getFriends';

class Friend extends React.Component{
constructor(){
    super();
    this.state = {
        name: '',
        age:'',
        email: '',
    }
}
componentDidMount(){
    this.props.getFriends()
}

handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
   
}
  //all three need to line up and be the same
handleSubmit = () => {
    console.log()
    this.props.addFriend({
        
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
        
    })
}

handleEdit(i) {
let val = i + 1;
    this.props.editFriend({
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
    }, val )

}

handleDelete(i) {
let val = i + 1;

this.props.deleteFriend(val)

}

    render() {
        return (
           
            <div>
                 <form onSubmit = {this.handleSubmit}>
               
            <input name = "name" value = {this.state.name} onChange = {this.handleChange}/>
            <input name = "age" value = {this.state.age} onChange ={this.handleChange} />
            <input name = "email" value = {this.state.email} onChange ={this.handleChange} />
            <button className="button">Add Friend</button>
            
            
            </form>
                {
                    this.props.friends.map((item,i) => {
                        return (
                            <div key = {i}>
                                {item.name}{item.age}{item.email}

                                <button className="button" onClick = {() => {{this.handleEdit(i)}}}>Update Friend</button>

                                <button className="button" onClick={() => {{this.handleDelete(i)}}} >Delete Friend</button>
                                </div>
                        )
                    })
                }
            </div>
        )
        //  return( <div>
        // {
        //     this.props.friends.map((item,i)=>{
        //         return
        //             <div key = {i}>
        //                 {item.name}
        //                 </div>
                
        //     })
        // }
        //  </div>)   
}}


const mapStateToProps = (state) => {
    return {
    friends: state.friendReducer.friends,
    }
}

export default connect(mapStateToProps, { getFriends, addFriend, editFriend, deleteFriend })(Friend)