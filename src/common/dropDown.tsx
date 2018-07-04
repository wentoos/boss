/*
 * @Author: Wentoo Yu 
 * @Date: 2018-06-25 10:16:45 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-07-04 15:48:15
 */
import { CSSTransition } from 'react-transition-group';
import * as React from 'react'





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
            <>

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
                    <div className='hide drop-down-container'>
                        <div style={{ background: 'red', height: '100px' }}></div>
                    </div>
                </CSSTransition>
                <div className='mask'>
                        
                </div>
            </>

        );
    }
}

export default dropDown;