const React = require('react');
const Default = require('../Default.jsx');

class New extends React.Component{
    render() {
        return(
            <Default stylesheet="css/show.css">
            <div>
                <h1>Add a New Contact</h1>
                <form action="/contacts" method="POST">
                    Name: <input type="text" name="name"/><br/>
                    Company: <input type="text" name="company"/><br/>
                    Image: <input type="url" name="img"/><br/>
                    Phone Number: <input type="number" name="phone"/><br/>
                    Email: <input type="email" name='email'/><br/>
                    Last Contacted: <input type="date" name="lastContacted"/><br/>
                    Notes: <input type="textarea" name="notes"/><br/>
                    Tags: <input type="texts" name="tags"/><br/>
                    <input type="submit" name="" value="Add Contact"/>
                </form>
            </div>
            </Default>
        )
    }
}

module.exports = New;

