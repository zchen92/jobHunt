const React = require('react');
const Default = require('../Default.jsx');

class Show extends React.Component {
    render() {
        const job = this.props.job
        const { _id, company, position, link, haveYouApplied, dateApplied, gotAnInterview, interviewDate, interviewMethod, receivedAnOffer, notes, tags } = this.props.job;
        return(
            <div>
                <button><a href="/jobs">Back</a></button>
                <h1>{company}</h1><br/>
                <h2>{position}</h2><br/>
                <p>{link}</p><br/>
                <p>Did you apply: {haveYouApplied ? `Yes`:`No`}</p><br/>
                <p>Date application submitted: {dateApplied? dateApplied.toDateString():""}</p><br/>
                <p>Did you have an interview: {gotAnInterview ? `Yes` : `No`}</p><br/>
                <p>Interview Date: {interviewDate? interviewDate.toDateString():""}</p><br/>
                <p>Interview Method: {interviewMethod}</p><br/>
                <p>Did you receive an offer: {receivedAnOffer ? `Yes`: `No`}</p><br/>
                <p>Notes: {notes}</p><br/>
                <p>Tags: {tags}</p>
                <button><a href={`/jobs/${job._id}/edit`}>Edit Job</a></button>
                <form action={`/jobs/${job._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE"/>
                </form>
            </div>
        )
    }
}

module.exports = Show;

