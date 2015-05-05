(function () {
    var React = require('react'),
        injectTapEventPlugin = require("react-tap-event-plugin"),
        Main = require('./components/Main.jsx'),
		AppsList = require('./components/appslist/AppsList.jsx'),
		Unsubscribe = require('./components/mails/Unsubscribe.jsx'),
        Router = require("react-router"),
        Route = Router.Route,
		HashLocation = Router.HashLocation,
        DefaultRoute = Router.DefaultRoute;
    window.React = React;

		var AppsAPI = require("./api/AppsAPI")

    var routes = (
        <Route handler={Main} path="/">
            <Route handler={AppsList} name="apps" path="apps/:appId" />
            <Route handler={Unsubscribe} name="mails" path="unsubscribe" />
            <DefaultRoute handler={AppsList} />
        </Route>
    );

    Router.run(routes, HashLocation, function (Handler, state) {
        var params = state.params;
        React.render(<Handler params={params} />, document.body);
    });

    injectTapEventPlugin();
})();
