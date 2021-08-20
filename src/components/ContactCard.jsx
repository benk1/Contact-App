import React from 'react';
import {Link} from 'react-router-dom'
import user from '../images/user.png'
const CardContact = ({contact,clickHandler}) => {
    // console.log('check',props)
    // const {id, name, email} = props.contact
    
    return (  
        <div className='item'>
            <img className='ui avatar' src={user} alt="user" />
        <div className='content'>
            <Link to={{pathname:`/contact/${contact.id}`,state:{contact: contact}}}>
            <div className="header">{contact.name}</div>
            <div>{contact.email}</div>
            </Link>
        </div>
        <i 
        className='trash alternate outline icon'
        onClick={clickHandler}
        style={{color:'red',marginTop:'7px', marginLeft:'10px'}} >
        </i>
        <Link to={{pathname:`/edit`,state:{contact: contact}}}>
        <i 
        className='edit alternate outline icon'
       
        style={{color:'blue',marginTop:'7px'}} >
        </i>
        </Link>
    </div>
    );
}
 
export default CardContact;