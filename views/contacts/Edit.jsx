const React = require('react');

class Edit extends React.Component{
    render() {
        const { _id, name, company, img, phone, email, lastContacted, notes, tags } = this.props.contact;
        return(
            <div>
                <h1>Edit Contact</h1>
                <form action={`/contacts/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={name}/><br/>
                    Company: <input type="text" name="company" defaultValue={company}/><br/>
                    Image: <input type="url" name="img" defaultValue={img}/><br/>
                    Phone Number: <input type="number" name="phone" defaultValue={phone}/><br/>
                    Email: <input type="email" name='email' defaultValue={email}/><br/>
                    Last Contacted: <input type="date" name="lastContacted" defaultValue={lastContacted ? lastContacted : ""}/><br/>
                    Notes: <input type="textarea" name="notes" defaultValue={notes}/><br/>
                    Tags: <input type="texts" name="tags" defaultValue={tags}/><br/>
                    <input type="submit" name="" value="Update Contact"/>
                </form>
                <button><a href="/contacts">Back</a></button>
            </div>
        )
    }
}

module.exports = Edit;