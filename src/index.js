
import * as React from "react";
import {render} from "react-dom";

class App extends React.PureComponent {
    render() {
        return (<div>has2dsdsdah</div>)
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
