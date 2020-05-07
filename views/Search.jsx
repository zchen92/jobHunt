const React = require('react');
const Default = require('./Default.jsx');

class Search extends React.Component{
    render() {
        const { jobs } = this.props
        console.log(this.props)
        return (
            <div>
                <h1>Search Results</h1>
                <nav>
                    <a href="/jobs">See all jobs</a><br/>
                    <a href="/contacts">See all contacts</a>
                </nav>
                <form action="/search" method="POST">
                    <input type="text" name="search"/>
                    <input type="submit" name="submit"/>
                </form>
                {this.props.search && 
                    <div>
                        <h1>Found Search</h1>
                        <div>
                            {this.props.search.map((newSearch, index)=>{
                                return(
                                    <div>
                                    <h2>Company: {newSearch.company}</h2><br/>
                                    <h2>Company: {newSearch.position}</h2><br/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
            </div>
        );
    };
}

module.exports = Search