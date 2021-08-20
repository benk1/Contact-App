import React, { Component } from 'react'

class EditContact extends Component {
    
    constructor(props){
        super(props)
        const {id,name,email} = props.location.state.contact
        this.state = {
            id: id,
            name: name,
            email: email
        }
    }

     handleChange =(e) =>{
         this.setState({
             [e.target.name]: e.target.value,
             //email: e.target.value
         })
     }

     handleSubmit =(e) =>{
         e.preventDefault()
         if(this.state.name === '' || this.state.email === ''){
             alert('All the fields  are mandatory!')
             return
         }
         this.props.updateContactHandler(this.state)
         this.setState({name: '',email: ''})
         console.log(this.state);
         this.props.history.push('/')
     }
    render() { 
        const {name,email} = this.state
        return ( 
            <div className='ui main'>
                <h2>Edit Contact</h2>
                <form className="ui form onSubmit={this.handleSubmit}">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name='name' placeholder='Name' value={name} onChange={this.handleChange} />
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input type="email" name='email' placeholder='Email' value={email} onChange={this.handleChange}/>
                    </div>
                    <button onClick={this.handleSubmit} className='ui button blue'>Update</button>
                </form>
            </div>
         );
    }
}
 
export default EditContact;