const React = require('react');
const Default = require('./Default.jsx');

class Index extends React.Component {
    render() {
        return (
            <Default stylesheet="css/style.css">
                <body>
                    <div class = "container-fluid">
                        <header class = "container" >
                            <h1 class="display-1">ORDERLY</h1>
                            <h2 class="display-4">Your personal and professional career organizer</h2>
                        </header>
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <a class="navbar-brand" href="/">Home</a>
                            <a class="nav-item nav-link" href="/jobs">Jobs</a>
                            <a class="nav-item nav-link" href="/contacts">Contacts</a>
                        </nav>
                        <div class = "container-sm">
                        <form action="/register" method="POST">
                            <div class="form-group row">
                            <legend>SIGN IN</legend>
                            <label for="username" class="col-sm-2 col-form-label">USERNAME</label>
                            <input type="text" class="form-control"id="username" placeholder="default"/>
                            </div>
                            <div class="form-group row">
                            <label for="password" class="col-sm-2 col-form-label">PASSWORD</label>
                            <input type="password" class="form-control" id="password"/>
                            </div>
                            <input type="submit" value = "SIGN IN"/>
                            <input type="submit" value = "SIGN UP FOR AN ACCOUNT"/>
                        </form>
                        </div>
                    </div>
                </body>
            </Default>
        );
    };
};

module.exports = Index;