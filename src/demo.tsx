
import * as React from 'react'
import { ReactNode, PureComponent, SFC } from 'react'
interface handleProps {
    handleClick:any,
    children?: ReactNode
}
const initialState = { clicksCount: '按钮' };//声明 state 默认值
type State = Readonly<typeof initialState>; //设置 state 只读 确保语法正确
class Button extends PureComponent<handleProps, State>{
    readonly state: State = initialState; // 确保正确使用 this.setState
    
    render(){
        
        return <button onClick={() => this.setState({ clicksCount: '998' }) }>{this.state.clicksCount}</button>
    }
}

export default Button