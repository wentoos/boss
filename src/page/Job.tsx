/*
 * @Author: Wentoo Yu 
 * @Date: 2018-06-25 10:16:45 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-07-04 15:32:19
 */
import * as React from 'react'
import Top from '../common/Top'
import DropDown from "../common/dropDown";
class Job extends React.PureComponent {
    constructor(prop: any) {
        super(prop);
    }
    render() {
        return (

            <>
                <Top />
                <DropDown />
                <div style={{ height: 900, background: 'pink' }}>
                    1111
                </div>
            </>

        )
    }
}
export default Job