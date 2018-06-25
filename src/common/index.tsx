/*
 * @Author: Wentoo Yu 
 * @Date: 2018-06-25 10:16:45 
 * @Last Modified by: Wentoo Yu
 * @Last Modified time: 2018-06-25 15:35:03
 */
import * as React from 'react'
import { PureComponent } from 'react';
import SelectButton from './SelectButton'

class Indexs extends PureComponent {

    render() {
        return (
       
                <div className='flex'>
                    <SelectButton handleClick={() => { console.log(1); return 'a' }} label='推荐' selected={false} />
                    <SelectButton handleClick={() => { console.log(1); return 'a' }} label='推荐' selected={true} />
                    <SelectButton handleClick={() => { console.log(1); return 'a' }} label='推荐' selected={true} />
                    <SelectButton handleClick={() => { console.log(1); return 'a' }} label='推荐' selected={true} last={true} />
                </div>
       

        );
    }
}

export default Indexs;