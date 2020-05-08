const React = require('react');
const Default = require('./Default.jsx');

class Search extends React.Component{
    render() {
        const { jobs } = this.props
        console.log(this.props)
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
                            <h1 class="display-1">Search Results</h1>
                            {this.props.search && 
                                <div>
                                    <div>
                                        {this.props.search.map((newSearch, index)=>{
                                            {console.log(newSearch.name)}
                                            return(
                                                <div>
                                                <h2>Company: {newSearch.company}</h2><br/>
                                                <h2>Position: {newSearch.position}</h2><br/>
                                                <h2>Name: {newSearch.name}</h2>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            }
            </div>
            </div>
            </div>
            </div>
            </Default>
        );
    };
}

module.exports = Search