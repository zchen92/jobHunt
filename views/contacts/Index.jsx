const React = require('react');
//const Default = require('./Default.jsx');

class Index extends React.Component{
    render() {
        const {contacts} = this.props
        return (
            <div>
                <h1>All Contacts</h1>
                <nav><a href="/contacts/new">Add a New Contact</a></nav>
                <div>
                    {contacts.map((contact,index)=>{
                        return(
                            <div>
                                <h2>Name: <a href={`/contacts/${contact._id}`}></a>{contact.name}</h2><br/>
                                <h3>Company: {contact.company}</h3><br/>
                                <img src={contact.img} alt=""/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

module.exports = Index