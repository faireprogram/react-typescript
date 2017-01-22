import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";

import store from "./store"
import router from "./route"
import './less/main.less';


ReactDOM.render(
	<Provider store={store}>
		{router}
    </Provider>,
    document.getElementById("example")
);
