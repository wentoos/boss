/*
 * @Author: Wentoo Yu 
 * @Date: 2018-06-25 10:16:45 
 * @Last Modified by: Wentoo Yu
 * @Last Modified time: 2018-06-28 10:47:33
 */
import { CSSTransition } from 'react-transition-group';
import * as React from 'react'


const transitionStyles: any = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
};


class dropDown extends React.PureComponent {
    state = {
        in: false
    }
    componentWillMount() {
        // setTimeout(()=>this.setState({in:true}))

    }
    componentDidMount() {
        this.setState({ in: true })
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({ in: !this.state.in })}>
                    cat
                </button>
                <CSSTransition in={this.state.in} timeout={500}
                    classNames={{
                        appear: 'hide',
                        appearActive: 'hide',
                        enter: 'hide',
                        enterActive: 'show fadeInDown animated',
                        enterDone: 'show',
                        exit: 'show',
                        exitActive: 'show fadeOutUp animated',
                        exitDone: 'hide',
                    }}
                >
                    {(state: string) => (
                        <div className='hide' style={{
                            ...transitionStyles[state]
                        }}>
                            <div style={{ background: 'red', height: '100px' }}></div>
                        </div>
                    )}
                </CSSTransition>
            </div>

        );
    }
}

export default dropDown;