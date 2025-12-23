import React from "react";
import ReactDOM from "react-dom";
import Xyz from "./components/Xyz";

// Mount function to start up the app
const mount = (el) => {
    const App = <Xyz />;
    ReactDOM.render(App, el);
}

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('_marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

// We are running through container
// and we should export the mount function
export { mount };
