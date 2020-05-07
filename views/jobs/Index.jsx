const React = require('react');
const Default = require('../Default.jsx');

class Index extends React.Component{
    render() {
        const { jobs } = this.props
        console.log(this.props)
        return (
            <div>
                <h1>All Jobs</h1>
                <nav><a href="/jobs/new">Add a New Job</a></nav>
                <form action="/search" method="POST">
                    <input type="text" name="search"/>
                    <input type="submit" name="submit"/>
                </form>
                <div>
                    {jobs.map((job,index)=>{
                        return(
                            <div>
                                <h2>Company: {job.company}</h2><br/>
                                <h3>Position:<a href={`/jobs/${job._id}`}>{job.position}</a></h3><br/>
                                <p>Have you Applied? {job.haveYouApplied ? `Yes`: `No`}</p><br/>
                                <p>Did you get an interview? {job.gotAnInterview ? `Yes` :`No`}</p><br/>
                                <p>Did you receive an offer? {job.receivedAnOffer ? `Yes` : `No`}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    };
}

module.exports = Index