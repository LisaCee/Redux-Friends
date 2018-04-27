import React, { Component } from 'react';
import { addFriend } from '../Actions';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreateFriendForm extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleAdd = () => {
        this.props.addFriend(this.state);
        this.setState({
            name: '',
            age: '',
            email: ''
        })
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                    <Label for="exampleName">Name</Label>
                    <Input placeholder='Name' value={this.state.name} onChange={this.handleChange} name='name' />
                    </FormGroup>

                    <FormGroup>
                    <Label for="exampleAge">Age</Label>
                    <Input placeholder='Age' value={this.state.age} onChange={this.handleChange} name='age' />
                    </FormGroup>

                    <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input placeholder='Email' value={this.state.email} onChange={this.handleChange} name='email' />
                    </FormGroup>
                
                    <Button onClick={this.handleAdd}>Add Friend</Button>
                    
                </Form>
            </div>
        )
    }
}

export default connect(null, { addFriend })(CreateFriendForm);