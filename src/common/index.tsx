/*
 * @Author: Wentoo Yu 
 * @Date: 2018-06-25 10:16:45 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-06-29 09:51:30
 */
import * as React from 'react'
import { PureComponent } from 'react';
import SelectButton from './SelectButton'

class Indexs extends PureComponent {
    state={
        cat:false  
    }
    render() {
        return (
       
                <div>
                <div className='flex'>
                    <SelectButton handleClick={() => { console.log(1); return 'a' }} label='推荐' selected={false} />
                    <SelectButton handleClick={() => { console.log(1); return 'a' }} label='推荐' selected={true} />
                    <SelectButton handleClick={() => { console.log(1); return 'a' }} label='推荐' selected={true} />
                    <SelectButton handleClick={() => { console.log(1); return 'a' }} label='推荐' selected={true} last={true} />
                </div>
                {/* <DropDown key='sdsd'/>
                <div key='999999'>
                    {
                        this.state.cat ? <DropDown/>:null
                    }
                </div> */}
                </div>
       

        );
    }
}

export default Indexs;