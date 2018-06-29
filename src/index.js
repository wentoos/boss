
import React from "react";
import {render} from "react-dom";
import SelectButton from './common'
import DropDown from './common/dropDown'
import NavBar from './common/NavBar'
import './style/index.css'
class App extends React.PureComponent {
    constructor(){
      super()
      this.state = {
        a: 1
      }
    }
    btn(){
      this.setState({a:this.state.a + 1})
    }
    componentDidMount(){
      //禁用浏览器下拉
      // document.addEventListener('touchmove', function (event) {
      //   event.preventDefault();
      // }, false);
    }
    render() {
        return (
          <div>
            <NavBar/>
            <SelectButton/>
            <DropDown/>
          </div>
        )

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
