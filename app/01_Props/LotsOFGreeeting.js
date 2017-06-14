/**
 * Created by panda.guo on 2017/6/14.
 */
import React, {Component}from 'react';
import {View, Text} from 'react-native';

class Greeting extends Component {
    render() {
        return <Text>Hello{this.props.desc}</Text>
    }
}

export default class LotsOFGreeeting extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting desc="RxJava"/>
                <Greeting desc="Retrofit"/>
                <Greeting desc="React"/>
            </View>

        );
    }


}