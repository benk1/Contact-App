import React,{useRef} from 'react';
import {Link} from 'react-router-dom'
import CardContact from './ContactCard';

const ContactList = ({ contacts,onDelete,term,searchKeyWord}) => {
   console.log('PROP',contacts);
   const inputEl = useRef('')

   // const deleteContactHandler =(id) =>{
   //    onDelete(id)
   // }

   
  
    const renderContactList = (contacts).map((contact) =>{
        return(
           <CardContact contact={contact} clickHandler={() =>onDelete(contact.id)} key={contact.id}/>
        )
    })

    const getSearchTerm =() =>{
    console.log(inputEl.current.value);
    searchKeyWord(inputEl.current.value)
    }
    return ( 
        <div className='main'>
           <h2>Contact List</h2>
           <div className='ui search '>
              <div className='ui icon input'>
                 <input ref={inputEl} type="text" placeholder='Search Contacts' className='prompt' value={term} onChange={getSearchTerm} />
                 <i className='search icon'></i>

              </div>

           </div>
           <Link to='/add'>
           <button className='ui button blue right'>Add Contact</button>
           </Link>
           <h2 className='contactsLength'>We Have {renderContactList.length} Contacts</h2>
           <div className='ui celled list'> {renderContactList.length > 0 ? renderContactList : 'No contacts Available'}</div>
          
        </div>
     );
}
 
export default ContactList;