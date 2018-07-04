
/*
 * @Author: Wentoo Yu 
 * @Date: 2018-06-25 10:16:45 
 * @Last Modified by:  Wentoo Yu
 * @Last Modified time: 2018-07-04 14:38:19
 */
import * as React from 'react'

interface handleProp{
    leftProp?: React.ReactNode,
    leftPropEvent?: ()=>{},
    centerProp?: React.ReactNode,
    centerPropEvent?: () => {},
    rightProp?: React.ReactNode,
    rightPropEvent?: () => {},

}


class NavBar extends React.PureComponent<handleProp> {
    constructor(prop:any){
        super(prop);
        this._leftClick = this._leftClick.bind(this)
        this._centerClick = this._centerClick.bind(this)
        this._rightClick = this._rightClick.bind(this)
    }
    _leftClick(){
        typeof this.props.leftPropEvent === 'function'&&this.props.leftPropEvent();
    }
    _centerClick(){
        typeof this.props.centerPropEvent === 'function' && this.props.centerPropEvent();
    }
    _rightClick(){
        typeof this.props.rightPropEvent === 'function' && this.props.rightPropEvent();
    }
    render() {
        return (
            <div className='navbar'>
                <div className='navbar-left' onClick={this._leftClick}>
                    {this.props.leftProp}
                </div>
                <div className='navbar-center' onClick={this._centerClick}>
                    {this.props.centerProp}
                </div>
                <div className='navbar-right' onClick={this._rightClick}>
                    {this.props.rightProp }
                </div>
            </div>

        );
    }
}

export default NavBar;