import React from 'react';
import {connect} from 'react-redux';
import { getFriends,addFriend } from '../actions/getFriends';

class Friend extends React.Component{
constructor(){
    super();
    this.state = {
        newFriend: '',
        age:'',
        email: '',
    }
}
componentDidMount(){
    this.props.getFriends()
}

handleChange = (e) => {
    this.setState({newFriend:e.target.value})
}

handleSubmit = () => {
    this.props.addFriend()
}

    render() {
        return (
           
            <div>
                 <form onSubmit = {this.handleSubmit}>
            <input id = "name" value = {this.state.newFriend} handleChange = {this.handleChange}/>
            <input id = "age" value = {this.state.age} handleChange = />
            <input id = "email" value = {this.state.email} handleChange =/>
            </form>
                {
                    this.props.friends.map((item,i) => {
                        return (
                            <div key = {i}>
                                {item.name}
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

export default connect(mapStateToProps, { getFriends })(Friend)