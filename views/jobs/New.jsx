const React = require('react');

class New extends React.Component{
    render() {
        return(
            <div>
                <h1>Add a New Job</h1>
                <form action="/jobs" method="POST">
                    Company: <input type="text" name="company"/><br/>
                    Position: <input type="text" name="position"/><br/>
                    Link: <input type="url" name="link"/><br/>
                    Did you apply: <input type="checkbox" name="haveYouApplied"/><br/>
                    Date application submitted: <input type="date" name="dateApplied"/><br/>
                    Do you have an interview: <input type="checkbox" name="gotAnInterview"/><br/>
                    Interview Date: <input type="date" name="interviewDate"/><br/>
                    Interview Method: <input type="text" name="interviewMethod"/><br/>
                    Offer Received: <input type="checkbox" name="receivedAnOffer"/><br/>
                    Notes: <input type="textarea" name="notes" /><br/>
                    Tags: <input type="texts" name="tags"/>
                    <input type="submit" name="" value="Add Job"/>
                </form>
            </div>
        );
    };
}

module.exports = New;