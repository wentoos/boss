
import React from "react";
import {render} from "react-dom";
import Button from './demo'
import Btn from './highModule'
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
    render() {
        return (
          <div>
            <Button handleClick={this.btn.bind(this)}>按钮{this.state.a}</Button>
            <Btn handleClick={()=>console.log('hight')} style={{color:'red',padding:'90px'}}/>
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
