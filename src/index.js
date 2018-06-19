
import React from "react";
import {render} from "react-dom";

class App extends React.PureComponent {
    render() {
        return (<div>ha   s 2dsdsd ah</div>)
    }
}
const renderApp = Component => {
  render(
      <Component />,
    document.getElementById("root")
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept(() => renderApp(App));
}
