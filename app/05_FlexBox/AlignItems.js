import React, {Component}from 'react';
import {View} from 'react-native';

/**
 * Align Items可以指定子View沿着 次轴(与主轴垂直的那个轴线) 的排列方式
 * 可选用字段:
 *     |--
 *          flex-start  次轴的起始位置,默认值  如果主轴指定为column就是左边，如果指定为row就是顶部
 *          center  子view在次轴上居中显示
 *          flex-end  次轴的末尾位置,默认值  如果主轴指定为column就是底部，如果指定为row就是右边
 *          stretch   条目渐渐间隔相同, ps:stretch如果要生效那么对应的子View是不能够指定具体的width或者height类比着Android中LinearLayout的weight属性去记忆
 */
export default class AlignItems extends Component {

    render() {
        return (
            //   <View style={{flex: 1, flexDirection: 'row'}}>
            //   <View style={{flex: 1, flexDirection: 'column'}}>
            //<View style={{flex: 1, flexDirection: 'row', justifyContent:'flex-end'}}>
            //<View style={{flex: 1, flexDirection: 'column', justifyContent:'flex-end'}}>
            //<View style={{flex: 1, flexDirection: 'row', justifyContent:'center'}}>
            //<View style={{flex: 1, flexDirection: 'row', justifyContent:'space-around'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between',alignItems:'flex-end'}}>
                <View style={{width: 50, height: 50, backgroundColor: "powderblue"}}></View>
                <View style={{width: 50, height: 50, backgroundColor: "skyblue"}}></View>
                <View style={{width: 50, height: 50, backgroundColor: "skyblue"}}></View>
                <View style={{width: 50, height: 50, backgroundColor: "steelblue"}}></View>
                <View style={{width: 50, height: 50, backgroundColor: "steelblue"}}></View>
            </View>
        )
    }

}