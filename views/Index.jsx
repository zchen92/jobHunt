const React = require('react');
//const Default = require('./Default.jsx');

class Index extends React.Component{

    render() {
        return (
            <div id = "container">
                <h1>Job Hunt</h1>
                <nav>
                    <a href="/jobs">Jobs</a><br/>
                    <a href="/contacts">Contacts</a>
                </nav>
                <iframe src="https://www.indeed.com" frameBorder="0"></iframe>
            </div>
        )
    }
}

module.exports = Index