const React = require('react');
const Default = require('../Default.jsx');

class Show extends React.Component{
    render() {
        const contact = this.props.contact
        const { _id, name, company, img, phone, email, lastContacted, notes, tags } = this.props.contact;
        return(
            <Default stylesheet="/css/show.css">
                <div>
                    <div class="container-fluid">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
                            <div class="container"> 
                                <a class="navbar-brand" href="/">ORDERLY</a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarResponsive">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="/">Home
                                                <span class="sr-only">(current)</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/contacts">Contacts</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/contacts/new">Create New Contact</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/jobs">Jobs</a>
                                        </li>
                                        <li class="nav-item">
                                            <form action="/search" method="POST">
                                                <input type="text" name="search"/>
                                                <input type="submit" name="submit"/>
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <header class = "container" class="bodyPortion">
                            <div class="container h-100">
                                <div class="col-12 text-center">
                                    <h1 class="display-1">""</h1>
                                </div>
                            </div>
                        </header>
                        <div class="container" class="bodyPortion">
                            <div className="col">
                                <h1 class="display-1">{name}</h1><br/>
                                <h2 class="display-4">{company}</h2><br/>
                                <img src={img} alt=""/><br/>
                                <p>Phone: {phone}</p><br/>
                                <p>Email: {email}</p><br/>
                                <p>Last Contacted: {lastContacted? lastContacted.toDateString():""}</p><br/>
                                <p>Notes: {notes}</p><br/>
                                <p>Tags: {tags}</p>
                                <button><a href={`/contacts/${contact._id}/edit`}>Edit Contact</a></button>
                                <form action={`/contacts/${contact._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE CONTACT"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = Show;