const React = require('react');
const Default = require('../Default.jsx');

class Edit extends React.Component{
    render() {
        const {_id, company, position, link, haveYouApplied, dateApplied, gotAnInterview, interviewDate, interviewMethod, receivedAnOffer,notes, tags} = this.props.job
        return (
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
                                        <a class="nav-link" href="/contacts">Contacts</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/contacts/new">Create New Contact</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/jobs">Jobs</a>
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
                    <header class = "container" class="bodyPortion">
                        <div class="container h-100">
                            <div class="col-12 text-center">
                                <h1 class="display-1">""</h1>
                            </div>
                        </div>
                    </header>
                <div class="container" class="bodyPortion">
                    <div className="col">
                        <h1 class = "display-1">Edit Job</h1>
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
                            Tags: <input type="texts" name="tags" defaultValue={tags}/><br/>
                            <input type="submit" name="" value="Update Job"/>
                        </form>
                        <button><a href={`/jobs/${_id}`}>Back</a></button>
                        </div>
                    </div>
            </div>
            </div>
            </Default>
        )
    }
}


module.exports = Edit;