import React, {Component}from 'react';
import {View} from 'react-native';

/**
 * Justify Content可以指定子View沿着 主轴 的排列方式
 * 可选用字段:
 *     |--
 *          flex-start  主轴的起始位置,默认值  如果主轴指定为column就是顶部，如果指定为row就是左边
 *          center  子view在主轴上居中显示
 *          flex-end  主轴的末尾位置,默认值  如果主轴指定为column就是底部，如果指定为row就是右边
 *          space-around   条目渐渐间隔相同,但是距离屏幕左右两边有留白,留白间距小于条目之间的间距
 *          space-between  条目之前间隔相同距离屏幕左边边框不留白
 */
export default class JustifyContent extends Component {

    render() {
        return (
            //   <View style={{flex: 1, flexDirection: 'row'}}>
            //   <View style={{flex: 1, flexDirection: 'column'}}>
            //<View style={{flex: 1, flexDirection: 'row', justifyContent:'flex-end'}}>
            //<View style={{flex: 1, flexDirection: 'column', justifyContent:'flex-end'}}>
            //<View style={{flex: 1, flexDirection: 'row', justifyContent:'center'}}>
            //<View style={{flex: 1, flexDirection: 'row', justifyContent:'space-around'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
                <View style={{width: 50, height: 50, backgroundColor: "powderblue"}}></View>
                <View style={{width: 50, height: 50, backgroundColor: "skyblue"}}></View>
                <View style={{width: 50, height: 50, backgroundColor: "skyblue"}}></View>
                <View style={{width: 50, height: 50, backgroundColor: "steelblue"}}></View>
                <View style={{width: 50, height: 50, backgroundColor: "steelblue"}}></View>
            </View>
        )
    }

}