const React = require('react');

class Show extends React.Component{
    render() {
        const { name, company, img, phone, email, lastContacted, notes, tags } = this.props.contact;
        return(
            <div>
                <h1>{name}</h1><br/>
                <h2>{company}</h2><br/>
                <img src={img} alt=""/><br/>
                <p>Phone: {phone}</p><br/>
                <p>Email: {email}</p><br/>
                <p>Last Contacted: {lastContacted}</p><br/>
                <p>Notes: {notes}</p><br/>
                <p>Tags: {tag}</p>
            </div>
        )
    }
}

module.exports = Show;