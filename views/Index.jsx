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
                        <nav class="navbar navbar-expand-lg navbar-light bg-light" class = "d-flex justify-content-center">
                            <a class="navbar-brand" href="/">Home</a>
                            <a class="nav-item nav-link" href="/jobs">Jobs</a>
                            <a class="nav-item nav-link" href="/contacts">Contacts</a>
                        </nav>
                        <div class = "container-sm" class="w-50 p-3" class="d-flex justify-content-center">
                            <form action="/register" method="POST" class="px-4 py-3">
                                <div class="form-group row">
                                    <legend class="d-flex justify-content-center">SIGN IN</legend>
                                    <label for="username" class="col-sm-2 col-form-label">USERNAME</label>
                                    <input type="text" class="form-control"id="username" placeholder="username"/>
                                </div>
                                <div class="form-group row">
                                    <label for="password" class="col-sm-2 col-form-label" placeholder="password">PASSWORD</label>
                                    <input type="password" class="form-control" id="password"/>
                                </div>
                                <div class="btn-toolbar" class="d-flex justify-content-center"> 
                                    <button type="submit" class="btn btn-primary" class="btn btn-outline-primary mr-1" >Sign In</button>
                                    <button type="submit" class="btn btn-primary">Create a New Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </body>
            </Default>
        );
    };
};

module.exports = Index;