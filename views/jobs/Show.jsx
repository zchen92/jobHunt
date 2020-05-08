const React = require('react');
const Default = require('../Default.jsx');

class Show extends React.Component {
    render() {
        const job = this.props.job
        const { _id, company, position, link, haveYouApplied, dateApplied, gotAnInterview, interviewDate, interviewMethod, receivedAnOffer, notes, tags } = this.props.job;
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
                                            <a class="nav-link" href="/jobs">Jobs</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/jobs/new">Add New Job</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/contacts">Contacts</a>
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
                    <div>
                </div>
                <header class = "container" class="bodyPortion">
                    <div class="container h-100">
                        <div class="col-12 text-center">
                            <h1 class="display-1">""</h1>
                        </div>
                    </div>
                </header>
                <div class="container" class="bodyPortion">
                    <div className="col"></div>
                        <h1 class="display-1">{company}</h1><br/>
                        <h2 class="display-4">{position}</h2><br/>
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
                </div>
            </div>
            </Default>
        )
    }
}

module.exports = Show;

