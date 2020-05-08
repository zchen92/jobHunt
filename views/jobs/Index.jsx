const React = require('react');
const Default = require('../Default.jsx');

class Index extends React.Component{
    render() {
        const { jobs } = this.props
        console.log(this.props)
        return (
            <Default stylesheet="css/index.css">
            <div class="container-fluid">
                <header class = "container" >
                    <h1 class="display-1">All Jobs</h1>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light" class = "d-flex justify-content-left">
                        <a class="navbar-brand" href="/">Home</a>
                        <a class="nav-item nav-link" href="/contacts">Contacts</a>
                        <a class="nav-item nav-link" href="/jobs/new">Add a New Job</a>
                    </nav>
                    <form action="/search" method="POST">
                    <input type="text" name="search"/>
                    <input type="submit" name="submit"/>
                </form>
                </header>
                <div class="container">
                <div className="row row-cols-3" class="d-flex justify-content-around">
                    {jobs.map((job,index)=>{
                        return(
                                <div class="show-grid">
                                    <h2>{job.company}</h2><br/>
                                    <h3><a href={`/jobs/${job._id}`}>{job.position}</a></h3><br/>
                                    <h4>Have you Applied? {job.haveYouApplied ? `Yes`: `No`}</h4><br/>
                                    <h4>Did you get an interview? {job.gotAnInterview ? `Yes` :`No`}</h4><br/>
                                    <h4>Did you receive an offer? {job.receivedAnOffer ? `Yes` : `No`}</h4>
                                </div>
                        )
                    })}
                </div>
                </div>
                </div>
            </Default>
        );
    };
}

module.exports = Index