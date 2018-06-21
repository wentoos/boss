import * as React from 'react';
import { PureComponent, MouseEvent, ReactNode,SFC} from 'react';
type btnPageProps = { handleClick?:any,style?:object };



class Btn extends PureComponent<btnPageProps> {
    state={btn:1}
    render() {
        return (
        <>
                <button onClick={()=>this.props.handleClick()} style={this.props.style}>{this.state.btn}</button>
        </>
        );
    }
}
const HighBtn = (config:any)=>(Comment: any) => class extends Comment{
    componentDidMount() {
        console.log(12);
    }
    state = { btn: 2 }
    render() {
        
        const { style = {} } = config;
        const elementsTree = super.render();
        console.log(elementsTree, 'elementsTree', style);
        if (config.type === 'add-style') {
            return <div style={{ ...style }}>
                {elementsTree}
            </div>;
        }
        return elementsTree;
    }
}

export default HighBtn({ type: 'add-style', style: { background: 'red' } })(Btn);