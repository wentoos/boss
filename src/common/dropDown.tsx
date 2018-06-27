/*
 * @Author: Wentoo Yu 
 * @Date: 2018-06-25 10:16:45 
 * @Last Modified by: Wentoo Yu
 * @Last Modified time: 2018-06-27 14:39:40
 */
import { Transition } from 'react-transition-group';
// var Transition = require('react-transition-group/Transition') ;
import * as React from 'react'



const defaultStyle= {
    transition: `opacity 300ms ease-in-out`,
    opacity: 0,
}

const transitionStyles:any= {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
};


class dropDown extends React.PureComponent {
    state={
        in:false
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.setState({in:!this.state.in})}>
                    cat
                </button>
                <Transition in={this.state.in} timeout={500}>
                    {(state:string) => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            I'm a fade Transition!!!!!
                </div>
                    )}
                </Transition>
            </div>
            
        );
    }
}

export default dropDown;