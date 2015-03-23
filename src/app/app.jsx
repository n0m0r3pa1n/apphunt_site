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
            <Route handler={AppsList} name="apps" path="apps/:appId" />
            <DefaultRoute handler={AppsList} />
        </Route>
    );

    Router.run(routes, function (Handler, state) {
        var params = state.params;
        React.render(<Handler params={params} />, document.body);
    });

    injectTapEventPlugin();
})();
