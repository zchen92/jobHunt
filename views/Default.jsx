const React = require('react');

class Default extends React.Component{
    render(){
        return(
        <html>
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Marketplace</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                <link rel="stylesheet" href={this.props.stylesheet}/>
            </head>
            <body class="container">
                {this.props.children}
            </body>
            <footer class="page-footer font-small blue pt-4">
                <div class="footer-copyright text-center py-3"> 
                    Creator: Luting (Zoe) Chen <br/>
                    © 2020 Copyright <br/>
                    Contact: <a href="https://www.linkedin.com/in/luting-chen">LinkedIn</a> <a href="https://github.com/zchen92/">GitHub</a></div>
            </footer>
        </html>
        )
    }
}

module.exports = Default