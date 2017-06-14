/**
 * Created by panda.guo on 2017/6/14.
 */
import React, {Component}from 'react';
import {View} from 'react-native';

export default class FixedDismensionsBasics extends Component {

    render() {
        return (
            <View>
                <View style={{width: 50, height: 50, backgroundColor: "powderblue"}}></View>
                <View style={{width: 100, height: 100, backgroundColor: "skyblue"}}></View>
                <View style={{width: 150, height: 150, backgroundColor: "steelblue"}}></View>
            </View>
        )
    }

}