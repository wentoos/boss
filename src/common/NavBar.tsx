
/*
 * @Author: Wentoo Yu 
 * @Date: 2018-06-25 10:16:45 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-07-04 11:11:27
 */
import { CSSTransition } from 'react-transition-group';
import * as React from 'react'

interface handleProp{
    leftProp?: React.ReactNode,
    leftPropEvent?: ()=>{},
    centerProp?: React.ReactNode,
    centerPropEvent?: React.SyntheticEvent,
    rightProp?: React.ReactNode,
    rightPropEvent?: React.SyntheticEvent,

}


class NavBar extends React.PureComponent<handleProp> {
    constructor(prop:any){
        super(prop);
        this._leftClick = this._leftClick.bind(this)
    }
    _leftClick(){
        this.props.leftPropEvent()
    }
    render() {
        return (
            <div className='navbar'>
                <div className='navbar-left' onClick={this._leftClick}>
                    {this.props.leftProp}
                </div>
                <div className='navbar-center'>
                    {this.props.centerProp}
                </div>
                <div className='navbar-right'>
                    {this.props.rightProp }
                </div>
            </div>

        );
    }
}

export default NavBar;