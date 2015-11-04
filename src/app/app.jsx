(function () {
    var React = require('react'),
        injectTapEventPlugin = require("react-tap-event-plugin"),
        Main = require('./components/Main.jsx'),
        Terms = require('./components/Terms.js'),
        Privacy = require('./components/Privacy.js'),
        AppsList = require('./components/appslist/AppsList.jsx'),
        Unsubscribe = require('./components/mails/Unsubscribe.jsx'),
        PersonalAppPage = require('./components/PersonalAppPage.jsx'),
        Router = require("react-router"),
        Route = Router.Route,
        HashLocation = Router.HashLocation,
        DefaultRoute = Router.DefaultRoute;
    window.React = React;

    var routes = (
        <Route>
            <Route handler={PersonalAppPage} name="personal_app_page" path="apps/:appId" />
            <Route handler={Main} path="/">
                <Route handler={AppsList} name="apps" path="apps/:appId/details" />
                <Route handler={Unsubscribe} name="mails" path="unsubscribe" />
                <DefaultRoute handler={AppsList} />
            </Route>
            <Route handler={Terms} path="/terms" />
            <Route handler={Privacy} path="/privacy" />
        </Route>
    );

    Router.run(routes, HashLocation, function (Handler, state) {
        console.log(state)
        var params = state.params;
        var query = state.query;
        React.render(<Handler params={params} query={query} />, document.body);
    });

    injectTapEventPlugin();
})();
