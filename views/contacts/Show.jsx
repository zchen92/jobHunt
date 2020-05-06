const React = require('react');

class Show extends React.Component{
    render() {
        const contact = this.props.contact
        const { _id, name, company, img, phone, email, lastContacted, notes, tags } = this.props.contact;
        return(
            <div>
                <button><a href="/contacts">Back</a></button>
                <h1>{name}</h1><br/>
                <h2>{company}</h2><br/>
                <img src={img} alt=""/><br/>
                <p>Phone: {phone}</p><br/>
                <p>Email: {email}</p><br/>
                <p>Last Contacted: {lastContacted? lastContacted.toDateString():""}</p><br/>
                <p>Notes: {notes}</p><br/>
                <p>Tags: {tags}</p>
                <button><a href={`/contacts/${contact._id}/edit`}>Edit Contact</a></button>
                <form action={`/contacts/${contact._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE"/>
                </form>
            </div>
        )
    }
}

module.exports = Show;