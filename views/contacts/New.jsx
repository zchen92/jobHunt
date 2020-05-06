const React = require('react');

class New extends React.Component{
    render() {
        return(
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
        )
    }
}

module.exports = New;

