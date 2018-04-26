import React from 'react';
import {connect} from 'react-redux';
import {FETCHING,FETCHED,getFriends,SUCCESS} from '../actions/getFriends';

 class Friend extends React.Component{
componentDidMount(){
    this.props.getFriends()
}

    render(){
        return(
            <div>
                {
                    this.props.friends.map((item,i)=>{
                        <div key = {i}>
                            {item.name}
                            </div>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    friends:state.friendsReducer.friends
}

export default connect(mapStateToProps,{getFriends})(Friend)