(function () {
    var React = require('react'),
        injectTapEventPlugin = require("react-tap-event-plugin"),
        Main = require('./components/Main.jsx'),
		AppsList = require('./components/AppsList.jsx'),
        Router = require("react-router"),
        Route = Router.Route,
        DefaultRoute = Router.DefaultRoute;
    window.React = React;

		var AppsAPI = require("./api/AppsAPI")

    var routes = (
        <Route handler={Main} path="/">
            <DefaultRoute handler={AppsList} />
        </Route>
    );

    Router.run(routes, function (Handler) {
        React.render(<Handler/>, document.body);
    });

    injectTapEventPlugin();
})();
