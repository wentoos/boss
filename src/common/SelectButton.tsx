/*
 * @Author: Wentoo Yu 
 * @Date: 2018-06-25 10:16:45 
 * @Last Modified by: Wentoo Yu
 * @Last Modified time: 2018-06-25 15:29:37
 */
import * as React from 'react'

interface handleProps {
    handleClick: () => string,
    label:string,
    last?:boolean,
    selected:boolean
}

class SelectButton extends React.PureComponent<handleProps> {
    constructor(props:any){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick():any{
        this.props.handleClick()
    }
    render() {
        return (
            <div className='select-button-container' onClick={this.handleClick} >
                <i></i>
                <div style={this.props.selected ?{  color:'#53cac3' }:{}}>
                    {this.props.label}
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>
                {
                    !this.props.last ? <i className='select-button-right-split'></i> : <i></i>
                }
                
            </div>
        );
    }
}
  
export default SelectButton;