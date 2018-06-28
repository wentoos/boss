
/*
 * @Author: Wentoo Yu 
 * @Date: 2018-06-25 10:16:45 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-06-28 16:35:49
 */
import { CSSTransition } from 'react-transition-group';
import * as React from 'react'


const transitionStyles: any = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
};


class NavBar extends React.PureComponent {

    componentWillMount() {
        // setTimeout(()=>this.setState({in:true}))

    }
    componentDidMount() {
        this.setState({ in: true })
    }
    render() {
        return (
            <div className='navbar'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>

        );
    }
}

export default NavBar;