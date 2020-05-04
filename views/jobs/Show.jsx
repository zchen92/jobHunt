const React = require('react');
const Default = require('./Default.jsx');

class Show extends React.Component {
    render() {
        const { company, position, link, haveYouApplied, dateApplied, gotAnInterview, interviewDate, interviewMethod, receivedAnOffer, notes, tags } = this.props.job;
        return(
            <div>
                <h1>{company}</h1><br/>
                <h2>{position}</h2><br/>
                <p>{link}</p><br/>
                <p>Did you apply: {haveYouApplied ? `Yes`:`No`}</p><br/>
                <p>Date application submitted: {dateApplied}</p><br/>
                <p>Did you have an interview: {gotAnInterview ? `Yes` : `No`}</p><br/>
                <p>Interview Date: {interviewDate}</p><br/>
                <p>Interview Method: {interviewMethod}</p><br/>
                <p>Did you receive an offer: {receivedAnOffer ? `Yes`: `No`}</p><br/>
                <p>Notes: {notes}</p><br/>
                <p>Tags: {tags}</p>
            </div>
        )
    }
}

module.exports = Show;

