
import * as React from 'react'
import { ReactNode, PureComponent } from 'react'
interface handleProps {
    handleClick:any,
    children?: ReactNode
}
class Button extends PureComponent<handleProps> {
    _onClick(){
        this.props.handleClick()
    }
    render(){
        return <button onClick={(this._onClick.bind(this))}>{this.props.children}</button>
    }
}

export default Button