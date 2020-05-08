const React = require('react');
const Default = require('../Default.jsx');

class Index extends React.Component{
    render() {
        const {contacts} = this.props
        return (
            <Default stylesheet="css/index.css">
            <div>
                <div class="container-fluid">
                    <header class = "container">
                        <h1 class="display-1">All Contacts</h1>
                        <nav class="navbar navbar-expand-lg navbar-light bg-light" class = "d-flex justify-content-left">
                            <a class="navbar-brand" href="/">Home</a>
                            <a class="nav-item nav-link" href="/jobs">Jobs</a>
                            <a class="nav-item nav-link" href="/contacts/new">Add New Contact</a>
                        </nav>
                        <form action="/search" method="POST">
                        <input type="text" name="search"/>
                        <input type="submit" name="submit"/>
                    </form>
                    </header>
                <div class="container">
                <div className="row row-cols-3" class="d-flex justify-content-around">
                    {contacts.map((contact,index)=>{
                        return(
                            <div class="show-grid">
                                <h2><a href={`/contacts/${contact._id}`}>{contact.name}</a></h2><br/>
                                <h3>{contact.company}</h3><br/>
                                <img src={contact.img} alt="" class="w-25 p-3" class="img-fluid" alt="Responsive image" class="img-thumbnail"/>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
            </div>
            </Default>
        )
    }
}

module.exports = Index