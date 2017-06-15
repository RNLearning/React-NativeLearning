/**
 * Created by panda.guo on 2017/6/14.
 */
import React, {Component}from 'react';
import {View} from 'react-native';

/**
 * flexDirection控制着子View的排列方式，默认值是column，也就值竖直排列,
 * 可选row,表示横向排列
 */
export default class FlexDirection extends Component {

    render() {
        return (
            //   <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{width: 50, height: 50, backgroundColor: "powderblue"}}></View>
                <View style={{width: 50, height: 50, backgroundColor: "skyblue"}}></View>
                <View style={{width: 50, height: 50, backgroundColor: "steelblue"}}></View>
            </View>
        )
    }

}