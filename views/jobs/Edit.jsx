const React = require('react');
const Default = require('../Default.jsx');

class Edit extends React.Component{
    render() {
        const {_id, company, position, link, haveYouApplied, dateApplied, gotAnInterview, interviewDate, interviewMethod, receivedAnOffer,notes, tags} = this.props.job
        return (
            <div>
                <h1>Edit</h1>
                 <form action={`/jobs/${_id}?_method=PUT`} method="POST">
                    Company: <input type="text" name="company" defaultValue ={company}/><br/>
                    Position: <input type="text" name="position" defaultValue={position}/><br/>
                    Link: <input type="url" name="link" defaultValue={link}/><br/>
                    Did you apply: <input type="checkbox" name="haveYouApplied" defaultValue={haveYouApplied}/><br/>
                    Date application submitted: <input type="date" name="dateApplied" defaultValue={dateApplied ? dateApplied : ""}/><br/>
                    Do you have an interview: <input type="checkbox" name="gotAnInterview" defaultValue={gotAnInterview}/><br/>
                    Interview Date: <input type="date" name="interviewDate" defaultValue={interviewDate ? interviewDate: ""}/><br/>
                    Interview Method: <input type="text" name="interviewMethod" defaultValue={interviewMethod}/><br/>
                    Offer Received: <input type="checkbox" name="receivedAnOffer" defaultValue={receivedAnOffer}/><br/>
                    Notes: <input type="textarea" name="notes" defaultValue={notes}/><br/>
                    Tags: <input type="texts" name="tags" defaultValue={tags}/>
                    <input type="submit" name="" value="Update Job"/>
                </form>
                <button><a href="/contacts">Back</a></button>
            </div>
        )
    }
}


module.exports = Edit;